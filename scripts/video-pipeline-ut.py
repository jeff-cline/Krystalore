#!/usr/bin/env python3
"""
Krystalore Video Pipeline - UploadThing version
Google Drive -> UploadThing -> JSON Catalog
"""

import json
import os
import sys
import time
import subprocess
import re

TMP_DIR = "/tmp/krystalore-videos"
CATALOG_FILE = "/Users/jeffcline/.openclaw/workspace/executive-krystalore/data/video-catalog-ut.json"
PROGRESS_FILE = "/tmp/krystalore-video-progress.json"
PROJECT_DIR = "/Users/jeffcline/.openclaw/workspace/executive-krystalore"
UPLOAD_SCRIPT = os.path.join(PROJECT_DIR, "scripts/upload-to-uploadthing.mjs")

os.makedirs(TMP_DIR, exist_ok=True)
os.makedirs(os.path.dirname(CATALOG_FILE), exist_ok=True)

def upload_to_uploadthing(file_path, title, category):
    """Upload via Node.js UTApi script."""
    print(f"    Uploading to UploadThing...", flush=True)
    try:
        result = subprocess.run(
            ["node", UPLOAD_SCRIPT, file_path, title, category],
            capture_output=True, text=True, timeout=600, cwd=PROJECT_DIR
        )
        if result.returncode != 0:
            print(f"    ERROR: {result.stderr[:300]}", flush=True)
            return None
        # Parse JSON from stdout (skip any stderr warnings)
        stdout = result.stdout.strip()
        if not stdout:
            print(f"    ERROR: No output from upload script", flush=True)
            return None
        data = json.loads(stdout)
        print(f"    Uploaded: {data['url'][:60]}...", flush=True)
        return data
    except subprocess.TimeoutExpired:
        print(f"    ERROR: Upload timed out", flush=True)
        return None
    except Exception as e:
        print(f"    ERROR: {e}", flush=True)
        return None

def download_from_gdrive(file_id, filename, max_retries=3):
    """Download a file from Google Drive using curl."""
    safe_name = re.sub(r'[^\w.\-]', '_', filename)
    output_path = os.path.join(TMP_DIR, safe_name)
    
    for attempt in range(max_retries):
        if attempt > 0:
            wait = 60 * (attempt + 1)
            print(f"    Retry {attempt+1}/{max_retries} after {wait}s...", flush=True)
            time.sleep(wait)
        
        print(f"    Downloading (attempt {attempt+1})...", flush=True)
        if os.path.exists(output_path):
            os.remove(output_path)
        
        # Use drive.usercontent.google.com which is more reliable
        url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm=t"
        try:
            result = subprocess.run(
                ["curl", "-L", "-s", "-o", output_path, url],
                capture_output=True, timeout=600
            )
        except subprocess.TimeoutExpired:
            print(f"    Download timed out", flush=True)
            continue
        except Exception as e:
            print(f"    Download error: {e}", flush=True)
            continue
        
        if os.path.exists(output_path) and os.path.getsize(output_path) > 100000:
            size_mb = os.path.getsize(output_path) / 1024 / 1024
            print(f"    Downloaded: {size_mb:.1f}MB", flush=True)
            return output_path
        else:
            size = os.path.getsize(output_path) if os.path.exists(output_path) else 0
            print(f"    Download incomplete ({size} bytes)", flush=True)
            if os.path.exists(output_path):
                os.remove(output_path)
    
    return None

def auto_categorize(filename):
    lower = filename.lower()
    if any(w in lower for w in ["fighter", "fight fit"]):
        return "Fighter Friday"
    elif any(w in lower for w in ["monday", "motivator", "burpee"]):
        return "Monday Motivator"
    elif any(w in lower for w in ["wacky", "wednesday"]):
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
    title = re.sub(r'\.mp4$', '', filename, flags=re.IGNORECASE)
    return re.sub(r'\s+', ' ', title).strip()

def load_catalog():
    if os.path.exists(CATALOG_FILE):
        return json.load(open(CATALOG_FILE))
    return []

def save_catalog(catalog):
    json.dump(catalog, open(CATALOG_FILE, 'w'), indent=2)

def main():
    video_list_file = sys.argv[1]
    all_files = json.load(open(video_list_file))
    
    videos = [f for f in all_files if f[1].endswith('.mp4')]
    total = len(videos)
    
    catalog = load_catalog()
    done_titles = {v["title"] for v in catalog}
    
    print("=" * 50, flush=True)
    print(f"Krystalore Video Pipeline (UploadThing)", flush=True)
    print(f"Total videos: {total}", flush=True)
    print(f"Already uploaded: {len(done_titles)}", flush=True)
    print("=" * 50, flush=True)
    
    done = len(done_titles)
    failed = 0
    
    for i, (file_id, file_path, _) in enumerate(videos):
        filename = os.path.basename(file_path)
        title = parse_title(filename)
        
        if '/' in file_path:
            category = file_path.split('/')[0]
        else:
            category = auto_categorize(filename)
        
        if title in done_titles:
            print(f"\n[{i+1}/{total}] SKIP: {title}", flush=True)
            continue
        
        print(f"\n[{i+1}/{total}] {title}", flush=True)
        print(f"    Category: {category}", flush=True)
        
        json.dump({"total": total, "done": done, "failed": failed, "current": title},
                  open(PROGRESS_FILE, 'w'))
        
        # Download
        local_path = download_from_gdrive(file_id, filename)
        if not local_path:
            failed += 1
            continue
        
        # Upload to UploadThing
        result = upload_to_uploadthing(local_path, title, category)
        
        # Clean up
        if os.path.exists(local_path):
            os.remove(local_path)
            print(f"    Cleaned up", flush=True)
        
        if not result:
            failed += 1
            continue
        
        catalog.append({
            "title": title,
            "category": category,
            "key": result["key"],
            "url": result["url"],
            "size": result.get("size", 0),
            "filename": filename,
            "status": "ready"
        })
        save_catalog(catalog)
        done += 1
        
        print(f"    SUCCESS [{done}/{total}] ({failed} failed)", flush=True)
        
        # Delay between videos to avoid Google Drive rate limiting
        time.sleep(30)
    
    json.dump({"total": total, "done": done, "failed": failed, "current": "COMPLETE"},
              open(PROGRESS_FILE, 'w'))
    
    print(f"\n{'='*50}", flush=True)
    print(f"Pipeline Complete!", flush=True)
    print(f"Total: {total} | Uploaded: {done} | Failed: {failed}", flush=True)
    print(f"Catalog: {CATALOG_FILE}", flush=True)
    print("=" * 50, flush=True)

if __name__ == "__main__":
    main()
