#!/bin/bash
# Video Pipeline: Google Drive -> Mux -> Krystalore
# Downloads in batches, uploads to Mux, deletes local files
# Outputs a JSON catalog for page generation

set -euo pipefail

MUX_TOKEN_ID="aa3ee106-78d4-4330-84a1-14774d6d3972"
MUX_TOKEN_SECRET="LKEWmkiLVaSr+PyAM+NJOHKV8eADQUg9rzOPDLV6FquL1dYf0tYiBxfS9h0R4lw5MBHyN/I0/31"
BATCH_SIZE=5
TMP_DIR="/tmp/krystalore-videos"
CATALOG_FILE="/Users/jeffcline/.openclaw/workspace/executive-krystalore/data/video-catalog.json"
PROGRESS_FILE="/tmp/krystalore-video-progress.json"

mkdir -p "$TMP_DIR"
mkdir -p "$(dirname "$CATALOG_FILE")"

# Initialize catalog if not exists
if [ ! -f "$CATALOG_FILE" ]; then
    echo '[]' > "$CATALOG_FILE"
fi

# Initialize progress
echo '{"total":0,"done":0,"failed":0,"current":""}' > "$PROGRESS_FILE"

upload_to_mux() {
    local file_path="$1"
    local title="$2"
    local category="$3"
    
    echo "  Uploading to Mux: $title"
    
    # Create a direct upload URL
    local upload_response
    upload_response=$(curl -s -X POST "https://api.mux.com/video/v1/uploads" \
        -u "${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}" \
        -H "Content-Type: application/json" \
        -d '{
            "new_asset_settings": {
                "playback_policy": ["signed"],
                "video_quality": "basic",
                "mp4_support": "none"
            },
            "cors_origin": "https://executive.krystalore.com"
        }')
    
    local upload_url
    upload_url=$(echo "$upload_response" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['url'])" 2>/dev/null)
    local upload_id
    upload_id=$(echo "$upload_response" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['id'])" 2>/dev/null)
    
    if [ -z "$upload_url" ] || [ "$upload_url" = "None" ]; then
        echo "  ERROR: Failed to get upload URL"
        echo "$upload_response" | head -5
        return 1
    fi
    
    # Upload the file via PUT
    local http_code
    http_code=$(curl -s -o /dev/null -w "%{http_code}" -X PUT "$upload_url" \
        -H "Content-Type: video/mp4" \
        --data-binary "@${file_path}")
    
    if [ "$http_code" != "200" ] && [ "$http_code" != "204" ]; then
        echo "  ERROR: Upload failed with HTTP $http_code"
        return 1
    fi
    
    # Poll for asset ID (upload processing)
    local asset_id=""
    for i in $(seq 1 30); do
        sleep 5
        local check
        check=$(curl -s "https://api.mux.com/video/v1/uploads/${upload_id}" \
            -u "${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}")
        asset_id=$(echo "$check" | python3 -c "import sys,json; d=json.load(sys.stdin)['data']; print(d.get('asset_id',''))" 2>/dev/null)
        local status
        status=$(echo "$check" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['status'])" 2>/dev/null)
        
        if [ -n "$asset_id" ] && [ "$asset_id" != "" ] && [ "$asset_id" != "None" ]; then
            echo "  Asset created: $asset_id"
            break
        fi
        if [ "$status" = "errored" ]; then
            echo "  ERROR: Upload errored"
            return 1
        fi
        echo "  Waiting for processing... ($i/30)"
    done
    
    if [ -z "$asset_id" ] || [ "$asset_id" = "None" ] || [ "$asset_id" = "" ]; then
        echo "  ERROR: Timed out waiting for asset"
        return 1
    fi
    
    # Get playback ID
    local asset_info
    asset_info=$(curl -s "https://api.mux.com/video/v1/assets/${asset_id}" \
        -u "${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}")
    local playback_id
    playback_id=$(echo "$asset_info" | python3 -c "import sys,json; d=json.load(sys.stdin)['data']; pbs=d.get('playback_ids',[]); print(pbs[0]['id'] if pbs else '')" 2>/dev/null)
    local duration
    duration=$(echo "$asset_info" | python3 -c "import sys,json; print(json.load(sys.stdin)['data'].get('duration',0))" 2>/dev/null)
    
    # Append to catalog
    python3 -c "
import json
cat = json.load(open('$CATALOG_FILE'))
cat.append({
    'title': '''$title''',
    'category': '''$category''',
    'asset_id': '$asset_id',
    'playback_id': '$playback_id',
    'upload_id': '$upload_id',
    'duration': $duration,
    'status': 'ready'
})
json.dump(cat, open('$CATALOG_FILE','w'), indent=2)
"
    
    echo "  Done: playback_id=$playback_id duration=${duration}s"
    return 0
}

download_from_gdrive() {
    local file_id="$1"
    local filename="$2"
    local output_path="${TMP_DIR}/${filename}"
    
    echo "  Downloading: $filename"
    # Use gdown for Google Drive downloads
    python3 -c "
import gdown
gdown.download(id='$file_id', output='$output_path', quiet=True)
" 2>/dev/null
    
    if [ -f "$output_path" ]; then
        local size
        size=$(du -h "$output_path" | cut -f1)
        echo "  Downloaded: $size"
        echo "$output_path"
        return 0
    else
        echo "  ERROR: Download failed"
        return 1
    fi
}

# Parse title from filename
parse_title() {
    local filename="$1"
    # Remove .mp4, clean up
    echo "$filename" | sed 's/\.mp4$//' | sed 's/  */ /g'
}

# Categorize uncategorized videos by filename
auto_categorize() {
    local filename="$1"
    local lower
    lower=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
    
    if echo "$lower" | grep -qi "fighter\|fight fit"; then
        echo "Fighter Friday"
    elif echo "$lower" | grep -qi "monday\|motivator\|burpee"; then
        echo "Monday Motivator"
    elif echo "$lower" | grep -qi "wacky\|wednesday"; then
        echo "Wacky Wednesday"
    elif echo "$lower" | grep -qi "taco tuesday"; then
        echo "Bonus Workouts"
    elif echo "$lower" | grep -qi "wash cloth\|bonus"; then
        echo "Bonus Workouts"
    elif echo "$lower" | grep -qi "weighted\|weight"; then
        echo "Weighted Workouts"
    elif echo "$lower" | grep -qi "arms\|abs"; then
        echo "Arms & Abs"
    elif echo "$lower" | grep -qi "mindset\|transition"; then
        echo "Mindset Lives"
    elif echo "$lower" | grep -qi "health"; then
        echo "Health is Wealth"
    elif echo "$lower" | grep -qi "2nd\|saturday"; then
        echo "2nd Saturdays"
    else
        echo "Bonus Workouts"
    fi
}

echo "=========================================="
echo "Krystalore Video Pipeline"
echo "=========================================="
echo ""

# Process the video list
# The list is passed via stdin as JSON
VIDEOS_JSON="$1"
TOTAL=$(python3 -c "import json; data=json.load(open('$VIDEOS_JSON')); print(len([f for f in data if f[1].endswith('.mp4')]))")
echo "Total videos to process: $TOTAL"
echo ""

DONE=0
FAILED=0
BATCH_NUM=0

# Process in batches
python3 -c "
import json
data = json.load(open('$VIDEOS_JSON'))
mp4s = [f for f in data if f[1].endswith('.mp4')]
for f in mp4s:
    print(f'{f[0]}|||{f[1]}')
" | while IFS='|||' read -r file_id file_path; do
    # Determine category
    if echo "$file_path" | grep -q '/'; then
        category=$(echo "$file_path" | cut -d'/' -f1)
        filename=$(basename "$file_path")
    else
        filename="$file_path"
        category=$(auto_categorize "$filename")
    fi
    
    # Clean category name (remove 'Uploaded to Circle' etc)
    title=$(parse_title "$filename")
    
    DONE=$((DONE + 1))
    echo ""
    echo "[$DONE/$TOTAL] $title (Category: $category)"
    echo '{"total":'$TOTAL',"done":'$DONE',"failed":'$FAILED',"current":"'"$title"'"}' > "$PROGRESS_FILE"
    
    # Download
    safe_filename=$(echo "$filename" | tr ' ' '_' | tr -cd '[:alnum:]._-')
    dl_path=$(download_from_gdrive "$file_id" "$safe_filename") || { FAILED=$((FAILED+1)); continue; }
    
    # Upload to Mux
    upload_to_mux "$dl_path" "$title" "$category" || { FAILED=$((FAILED+1)); rm -f "$dl_path"; continue; }
    
    # Delete local file
    rm -f "$dl_path"
    echo "  Cleaned up local file"
    
    # Check disk space
    free_gb=$(df -g /tmp | tail -1 | awk '{print $4}')
    echo "  Disk free: ${free_gb}GB"
done

echo ""
echo "=========================================="
echo "Pipeline Complete!"
echo "Total: $TOTAL | Done: $DONE | Failed: $FAILED"
echo "Catalog: $CATALOG_FILE"
echo "=========================================="
