#!/usr/bin/env node
/**
 * Upload local video files to UploadThing using UTApi
 * Usage: node upload-to-uploadthing.mjs <video-file-path> <title> <category>
 * Outputs JSON with file key and URL on success
 */

import { UTApi } from "uploadthing/server";
import { readFileSync } from "fs";
import { basename } from "path";

const UPLOADTHING_TOKEN = "eyJhcGlLZXkiOiJza19saXZlX2NlOGYwMzZkY2E0NTE4NzEzNDhjZWIwMWY3ZjY3ZmY2NTFmZDAxNGFmYWQ3YmM1MGIzNWZiY2ZhNzE1ODIwNTgiLCJhcHBJZCI6IjY2eDE3dHp3OXgiLCJyZWdpb25zIjpbInNlYTEiXX0=";

const utapi = new UTApi({ token: UPLOADTHING_TOKEN });

async function main() {
    const filePath = process.argv[2];
    const title = process.argv[3] || basename(filePath, '.mp4');
    const category = process.argv[4] || 'Uncategorized';

    if (!filePath) {
        console.error("Usage: node upload-to-uploadthing.mjs <file> [title] [category]");
        process.exit(1);
    }

    console.error(`Uploading ${filePath} to UploadThing...`);
    
    const fileBuffer = readFileSync(filePath);
    const fileName = basename(filePath);
    
    const file = new File([fileBuffer], fileName, { type: "video/mp4" });
    
    const response = await utapi.uploadFiles(file, {
        metadata: { title, category }
    });

    if (response.error) {
        console.error("Upload error:", response.error);
        process.exit(1);
    }

    // Output JSON result
    console.log(JSON.stringify({
        key: response.data.key,
        url: response.data.ufsUrl || response.data.url,
        name: response.data.name,
        size: response.data.size,
        title,
        category
    }));
}

main().catch(err => {
    console.error("Fatal:", err.message);
    process.exit(1);
});
