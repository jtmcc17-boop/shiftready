function normalizeApiBase(raw) {
  const trimmed = (raw || 'http://localhost:8000').trim().replace(/\/+$/, '')
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  const isLocal =
    /^localhost\b/i.test(trimmed) ||
    /^127\.\d+\.\d+\.\d+/.test(trimmed) ||
    /^\[::1\]/.test(trimmed)
  return `${isLocal ? 'http' : 'https'}://${trimmed}`
}

const API_BASE_URL = normalizeApiBase(import.meta.env.VITE_API_URL)

if (import.meta.env.PROD && typeof window !== 'undefined') {
  const v = import.meta.env.VITE_API_URL
  if (!v || String(v).includes('localhost')) {
    console.error(
      '[ShiftReady] VITE_API_URL is missing or still localhost. Set it in Vercel to your Render URL and redeploy the frontend.'
    )
  }
}

export function apiUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE_URL}${normalizedPath}`
}
