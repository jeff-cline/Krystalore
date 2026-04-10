#!/usr/bin/env python3
"""
Retry failed uploads with throttling.
Downloads from Google Drive, uploads to UploadThing, updates catalog.
10s delay between uploads to avoid rate limits.
"""

import json
import os
import subprocess
import re
import time
import sys

TMP_DIR = "/tmp/krystalore-videos"
CATALOG_FILE = "/Users/jeffcline/.openclaw/workspace/executive-krystalore/data/video-catalog-ut.json"
VIDEO_LIST = "/tmp/krystalore-video-list.json"
PROJECT_DIR = "/Users/jeffcline/.openclaw/workspace/executive-krystalore"
UPLOAD_SCRIPT = os.path.join(PROJECT_DIR, "scripts/upload-to-uploadthing.mjs")
PROGRESS_FILE = "/tmp/krystalore-retry-progress.json"

os.makedirs(TMP_DIR, exist_ok=True)

DELAY_BETWEEN_UPLOADS = 10  # seconds

def save_progress(done, failed, total, current):
    with open(PROGRESS_FILE, 'w') as f:
        json.dump({"done": done, "failed": failed, "total": total, "current": current}, f)

def download(file_id, filename):
    safe_name = re.sub(r'[^\w.\-]', '_', filename)
    output_path = os.path.join(TMP_DIR, safe_name)
    if os.path.exists(output_path):
        os.remove(output_path)
    
    url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm=t"
    for attempt in range(3):
        if attempt > 0:
            print(f"    Retry download {attempt+1}/3 after 30s...", flush=True)
            time.sleep(30)
        try:
            subprocess.run(["curl", "-L", "-s", "-o", output_path, url], timeout=600)
        except Exception as e:
            print(f"    Download error: {e}", flush=True)
            continue
        
        if os.path.exists(output_path) and os.path.getsize(output_path) > 100000:
            size_mb = os.path.getsize(output_path) / 1024 / 1024
            print(f"    Downloaded: {size_mb:.1f}MB", flush=True)
            return output_path
        elif os.path.exists(output_path):
            sz = os.path.getsize(output_path)
            print(f"    Download too small ({sz} bytes)", flush=True)
    
    return None

def upload(file_path, title, category):
    for attempt in range(3):
        if attempt > 0:
            wait = 30 * (attempt + 1)
            print(f"    Retry upload {attempt+1}/3 after {wait}s...", flush=True)
            time.sleep(wait)
        try:
            result = subprocess.run(
                ["node", UPLOAD_SCRIPT, file_path, title, category],
                capture_output=True, text=True, timeout=600, cwd=PROJECT_DIR
            )
            if result.returncode != 0:
                print(f"    Upload error: {result.stderr[:200]}", flush=True)
                continue
            stdout = result.stdout.strip()
            if not stdout:
                continue
            data = json.loads(stdout)
            print(f"    Uploaded: {data['url'][:60]}...", flush=True)
            return data
        except Exception as e:
            print(f"    Upload exception: {e}", flush=True)
    return None

def main():
    with open(VIDEO_LIST) as f:
        all_videos = json.load(f)
    with open(CATALOG_FILE) as f:
        catalog = json.load(f)
    
    catalog_titles = {v['title'].lower().strip() for v in catalog}
    
    to_upload = []
    for v in all_videos:
        raw_name = v[1].split('/')[-1]
        title = raw_name.replace('.mp4', '').replace('.png', '').strip()
        category = v[1].split('/')[0] if '/' in v[1] else 'Uncategorized'
        if title.lower() not in catalog_titles:
            to_upload.append({
                'gdriveId': v[0],
                'filename': raw_name,
                'title': title,
                'category': category
            })
    
    total = len(to_upload)
    print(f"=== Retrying {total} failed uploads ===", flush=True)
    done = 0
    failed = 0
    
    for i, video in enumerate(to_upload):
        idx = i + 1
        print(f"\n[{idx}/{total}] {video['title']}", flush=True)
        print(f"  Category: {video['category']}", flush=True)
        save_progress(done, failed, total, video['title'])
        
        # Download
        file_path = download(video['gdriveId'], video['filename'])
        if not file_path:
            print(f"  FAILED (download)", flush=True)
            failed += 1
            continue
        
        # Upload with throttle
        result = upload(file_path, video['title'], video['category'])
        
        # Clean up downloaded file
        if file_path and os.path.exists(file_path):
            os.remove(file_path)
        
        if not result:
            print(f"  FAILED (upload)", flush=True)
            failed += 1
            continue
        
        # Add to catalog
        catalog.append({
            'title': video['title'],
            'category': video['category'],
            'key': result['key'],
            'url': result['url'],
            'size': result.get('size', 0),
            'filename': video['filename'],
            'status': 'ready'
        })
        with open(CATALOG_FILE, 'w') as f:
            json.dump(catalog, f, indent=2)
        catalog_titles.add(video['title'].lower().strip())
        
        done += 1
        print(f"  SUCCESS [{done}/{total}] ({failed} failed)", flush=True)
        
        # Throttle between uploads
        if i < len(to_upload) - 1:
            print(f"  Waiting {DELAY_BETWEEN_UPLOADS}s before next upload...", flush=True)
            time.sleep(DELAY_BETWEEN_UPLOADS)
    
    save_progress(done, failed, total, "COMPLETE")
    print(f"\n{'='*50}", flush=True)
    print(f"Retry Complete! Total: {total} | Uploaded: {done} | Failed: {failed}", flush=True)
    print(f"Catalog: {CATALOG_FILE}", flush=True)
    print(f"{'='*50}", flush=True)

if __name__ == "__main__":
    main()
