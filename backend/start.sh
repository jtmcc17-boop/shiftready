#!/usr/bin/env bash
# Always run from this directory so `uvicorn main:app` works even if Render's cwd is the repo root.
set -euo pipefail
cd "$(dirname "$0")"
exec python -m uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"
