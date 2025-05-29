// src/app/api/stream/route.ts
import type { NextRequest } from 'next/server'

// ----  adjust to your camera’s IP  -----------------------------
const CAMERA_URL = 'http://172.20.10.7:81/stream'
// ---------------------------------------------------------------

// Disable static optimisation and caching for a live stream
export const dynamic      = 'force-dynamic'
export const fetchCache   = 'default-no-store'
// (optional) guarantee Node runtime — avoids Edge restrictions
export const runtime      = 'nodejs'  

export async function GET(_: NextRequest) {
  // Open a long-lived connection to the ESP32-CAM
  const upstream = await fetch(CAMERA_URL, {
    // keep-alive header lets the board reuse the TCP socket
    headers: { Connection: 'keep-alive' },
  })

  if (!upstream.ok || !upstream.body) {
    return new Response(
      'Unable to reach camera',
      { status: 502 },
    )
  }

  // Forward the MJPEG stream verbatim
  return new Response(upstream.body, {
    status: 200,
    headers: {
      // Preserve the multipart boundary the camera already sets
      'Content-Type':
        upstream.headers.get('content-type')
        ?? 'multipart/x-mixed-replace; boundary=frame',
      'Cache-Control': 'no-store',
      Connection: 'keep-alive',
    },
  })
}
