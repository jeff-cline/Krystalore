#!/usr/bin/env python3
"""
Krystalore Video Pipeline
Google Drive -> Mux -> JSON Catalog
Downloads videos in batches, uploads to Mux, cleans up local files.
"""

import json
import os
import sys
import time
import subprocess
import re
import base64
import urllib.request
import urllib.error

MUX_TOKEN_ID = "aa3ee106-78d4-4330-84a1-14774d6d3972"
MUX_TOKEN_SECRET = "LKEWmkiLVaSr+PyAM+NJOHKV8eADQUg9rzOPDLV6FquL1dYf0tYiBxfS9h0R4lw5MBHyN/I0/31"
TMP_DIR = "/tmp/krystalore-videos"
CATALOG_FILE = "/Users/jeffcline/.openclaw/workspace/executive-krystalore/data/video-catalog.json"
PROGRESS_FILE = "/tmp/krystalore-video-progress.json"

os.makedirs(TMP_DIR, exist_ok=True)
os.makedirs(os.path.dirname(CATALOG_FILE), exist_ok=True)

def mux_api(method, path, data=None):
    """Make authenticated Mux API call."""
    url = f"https://api.mux.com{path}"
    creds = base64.b64encode(f"{MUX_TOKEN_ID}:{MUX_TOKEN_SECRET}".encode()).decode()
    headers = {
        "Authorization": f"Basic {creds}",
        "Content-Type": "application/json"
    }
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print(f"    Mux API error: {e.code} {e.read().decode()[:200]}")
        return None

def upload_to_mux(file_path, title, category):
    """Upload a video file to Mux via direct upload."""
    print(f"    Creating Mux upload...")
    
    # Create direct upload
    resp = mux_api("POST", "/video/v1/uploads", {
        "new_asset_settings": {
            "playback_policy": ["signed"],
            "video_quality": "basic"
        },
        "cors_origin": "https://executive.krystalore.com"
    })
    
    if not resp or "data" not in resp:
        print(f"    ERROR: Failed to create upload")
        return None
    
    upload_url = resp["data"]["url"]
    upload_id = resp["data"]["id"]
    
    # Upload file via curl (handles large files better than urllib)
    print(f"    Uploading {os.path.getsize(file_path) / 1024 / 1024:.1f}MB to Mux...")
    result = subprocess.run(
        ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}",
         "-X", "PUT", upload_url,
         "-H", "Content-Type: video/mp4",
         "-T", file_path],
        capture_output=True, text=True, timeout=600
    )
    
    http_code = result.stdout.strip()
    if http_code not in ("200", "204"):
        print(f"    ERROR: Upload failed HTTP {http_code}")
        return None
    
    print(f"    Upload complete. Waiting for asset...")
    
    # Poll for asset ID
    asset_id = None
    for i in range(60):
        time.sleep(5)
        check = mux_api("GET", f"/video/v1/uploads/{upload_id}")
        if not check:
            continue
        status = check["data"].get("status", "")
        asset_id = check["data"].get("asset_id")
        
        if asset_id:
            print(f"    Asset created: {asset_id}")
            break
        if status == "errored":
            print(f"    ERROR: Upload errored")
            return None
        if i % 6 == 5:
            print(f"    Still processing... ({i*5}s)")
    
    if not asset_id:
        print(f"    ERROR: Timed out waiting for asset")
        return None
    
    # Get asset details
    asset_info = mux_api("GET", f"/video/v1/assets/{asset_id}")
    if not asset_info:
        return {"asset_id": asset_id, "playback_id": "", "duration": 0}
    
    playback_ids = asset_info["data"].get("playback_ids", [])
    playback_id = playback_ids[0]["id"] if playback_ids else ""
    duration = asset_info["data"].get("duration", 0)
    
    return {
        "asset_id": asset_id,
        "playback_id": playback_id,
        "upload_id": upload_id,
        "duration": duration
    }

def download_from_gdrive(file_id, filename, max_retries=3):
    """Download a file from Google Drive using gdown with retries."""
    safe_name = re.sub(r'[^\w.\-]', '_', filename)
    output_path = os.path.join(TMP_DIR, safe_name)
    
    for attempt in range(max_retries):
        if attempt > 0:
            wait = 30 * attempt  # 30s, 60s backoff
            print(f"    Retry {attempt+1}/{max_retries} after {wait}s...")
            time.sleep(wait)
        
        print(f"    Downloading from Google Drive (attempt {attempt+1})...")
        # Clean up any partial files
        for f in os.listdir(TMP_DIR):
            if f.endswith('.part'):
                os.remove(os.path.join(TMP_DIR, f))
        
        try:
            import gdown
            gdown.download(id=file_id, output=output_path, quiet=True)
        except Exception as e:
            print(f"    ERROR downloading: {e}")
            continue
        
        if os.path.exists(output_path) and os.path.getsize(output_path) > 10000:
            size_mb = os.path.getsize(output_path) / 1024 / 1024
            print(f"    Downloaded: {size_mb:.1f}MB")
            return output_path
        else:
            print(f"    Download incomplete or too small")
            if os.path.exists(output_path):
                os.remove(output_path)
    
    print(f"    FAILED after {max_retries} attempts")
    return None

def auto_categorize(filename):
    """Guess category from filename for root-level videos."""
    lower = filename.lower()
    if any(w in lower for w in ["fighter", "fight fit"]):
        return "Fighter Friday"
    elif any(w in lower for w in ["monday", "motivator", "burpee"]):
        return "Monday Motivator"
    elif any(w in lower for w in ["wacky", "wednesday", "wacky wed"]):
        return "Wacky Wednesday"
    elif any(w in lower for w in ["taco tuesday", "wash cloth", "bonus"]):
        return "Bonus Workouts"
    elif "weighted" in lower or "weight" in lower:
        return "Weighted Workouts"
    elif "arms" in lower or "abs" in lower:
        return "Arms & Abs"
    elif "mindset" in lower or "transition" in lower:
        return "Mindset Lives"
    elif "health" in lower:
        return "Health is Wealth"
    elif "2nd" in lower or "saturday" in lower:
        return "2nd Saturdays"
    else:
        return "Bonus Workouts"

def parse_title(filename):
    """Clean up filename into a title."""
    title = re.sub(r'\.mp4$', '', filename, flags=re.IGNORECASE)
    title = re.sub(r'\s+', ' ', title).strip()
    return title

def load_catalog():
    if os.path.exists(CATALOG_FILE):
        return json.load(open(CATALOG_FILE))
    return []

def save_catalog(catalog):
    json.dump(catalog, open(CATALOG_FILE, 'w'), indent=2)

def main():
    video_list_file = sys.argv[1]
    all_files = json.load(open(video_list_file))
    
    # Filter to mp4 only
    videos = [f for f in all_files if f[1].endswith('.mp4')]
    total = len(videos)
    
    # Load existing catalog to skip already-uploaded
    catalog = load_catalog()
    done_titles = {v["title"] for v in catalog}
    
    print("=" * 50)
    print(f"Krystalore Video Pipeline")
    print(f"Total videos: {total}")
    print(f"Already uploaded: {len(done_titles)}")
    print("=" * 50)
    
    done = len(done_titles)
    failed = 0
    
    for i, (file_id, file_path, _) in enumerate(videos):
        filename = os.path.basename(file_path)
        title = parse_title(filename)
        
        # Determine category
        if '/' in file_path:
            category = file_path.split('/')[0]
        else:
            category = auto_categorize(filename)
        
        # Skip already done
        if title in done_titles:
            print(f"\n[{i+1}/{total}] SKIP (already uploaded): {title}")
            continue
        
        print(f"\n[{i+1}/{total}] {title}")
        print(f"    Category: {category}")
        
        # Update progress
        json.dump({"total": total, "done": done, "failed": failed, "current": title}, 
                  open(PROGRESS_FILE, 'w'))
        
        # Download
        local_path = download_from_gdrive(file_id, filename)
        if not local_path:
            failed += 1
            continue
        
        # Upload to Mux
        result = upload_to_mux(local_path, title, category)
        
        # Clean up local file immediately
        if os.path.exists(local_path):
            os.remove(local_path)
            print(f"    Cleaned up local file")
        
        if not result:
            failed += 1
            continue
        
        # Add to catalog
        catalog.append({
            "title": title,
            "category": category,
            "asset_id": result["asset_id"],
            "playback_id": result.get("playback_id", ""),
            "upload_id": result.get("upload_id", ""),
            "duration": result.get("duration", 0),
            "filename": filename,
            "status": "ready"
        })
        save_catalog(catalog)
        done += 1
        
        print(f"    SUCCESS [{done}/{total}] ({failed} failed)")
        
        # Delay between videos to avoid Google Drive rate limiting
        print(f"    Waiting 15s before next video...")
        time.sleep(15)
    
    # Final progress
    json.dump({"total": total, "done": done, "failed": failed, "current": "COMPLETE"}, 
              open(PROGRESS_FILE, 'w'))
    
    print("\n" + "=" * 50)
    print(f"Pipeline Complete!")
    print(f"Total: {total} | Uploaded: {done} | Failed: {failed}")
    print(f"Catalog: {CATALOG_FILE}")
    print("=" * 50)

if __name__ == "__main__":
    main()
