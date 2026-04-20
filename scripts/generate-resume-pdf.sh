#!/usr/bin/env bash
set -euo pipefail

# Requires `pnpm dev` running on :3000.
# Uses macOS Chrome's headless mode to skip browser-added headers/footers.

URL="${RESUME_URL:-http://localhost:3001/resume}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/resume.pdf"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at $CHROME" >&2
  exit 1
fi

if ! curl -sf -o /dev/null "$URL"; then
  echo "Dev server not reachable at $URL. Run 'pnpm dev' first." >&2
  exit 1
fi

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "$URL" >/dev/null 2>&1

echo "Wrote $OUT"
