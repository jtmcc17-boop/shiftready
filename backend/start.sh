#!/usr/bin/env bash
# Always run from this directory so `uvicorn main:app` works even if Render's cwd is the repo root.
set -euo pipefail
cd "$(dirname "$0")"
PY="$(command -v python3 2>/dev/null || command -v python 2>/dev/null || true)"
if [[ -z "${PY}" ]]; then
  echo "start.sh: python3/python not found on PATH" >&2
  exit 1
fi
exec "$PY" -m uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"
