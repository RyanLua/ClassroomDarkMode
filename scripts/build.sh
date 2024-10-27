#!/bin/bash

VERSION=$(grep -oP '"version":\s*"\K[0-9.]+(?=")' src/manifest.json)
CHROMIUM_BUILD_DIR="builds/ClassroomDarkMode-$VERSION-chromium"
FIREFOX_BUILD_DIR="builds/ClassroomDarkMode-$VERSION-firefox"

# Build Chromium extension
mkdir -p "$CHROMIUM_BUILD_DIR"
cp -r src/* "$CHROMIUM_BUILD_DIR"
rm "$CHROMIUM_BUILD_DIR/manifest.firefox.json"
zip -r "$CHROMIUM_BUILD_DIR.zip" "$CHROMIUM_BUILD_DIR"

# Build Firefox extension
mkdir -p "$FIREFOX_BUILD_DIR"
cp -r src/* "$FIREFOX_BUILD_DIR"
cp "$FIREFOX_BUILD_DIR/manifest.firefox.json" "$FIREFOX_BUILD_DIR/manifest.json"
rm "$FIREFOX_BUILD_DIR/manifest.firefox.json"
zip -r "$FIREFOX_BUILD_DIR.zip" "$FIREFOX_BUILD_DIR"

echo "Build completed successfully!"
