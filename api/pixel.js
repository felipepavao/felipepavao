/**
 * Meta Conversions API — server-side pixel
 *
 * POST /api/pixel
 * Body: { event_name, event_id, event_source_url, fbp, fbc, custom_data }
 *
 * Recebe o evento do browser, enriquece com IP + user-agent
 * e repassa ao Meta CAPI. O mesmo event_id é usado no pixel
 * client-side para deduplicação automática pelo Meta.
 */

const PIXEL_ID = '641093908868814'
const CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const accessToken = process.env.META_CAPI_TOKEN
  if (!accessToken) {
    return res.status(500).json({ error: 'CAPI token not configured' })
  }

  const {
    event_name = 'PageView',
    event_id,
    event_source_url,
    fbp,
    fbc,
    custom_data,
  } = req.body ?? {}

  // Dados do cliente disponíveis no servidor — melhora o match rate
  const clientIp =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    null

  const clientUserAgent = req.headers['user-agent'] || null

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,                    // mesmo ID do pixel client-side → Meta deduplica
        event_source_url,
        action_source: 'website',
        user_data: {
          ...(clientIp && { client_ip_address: clientIp }),
          ...(clientUserAgent && { client_user_agent: clientUserAgent }),
          ...(fbp && { fbp }),
          ...(fbc && { fbc }),
        },
        ...(custom_data && { custom_data }),
      },
    ],
  }

  try {
    const response = await fetch(`${CAPI_URL}?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('[CAPI] Meta error:', JSON.stringify(data))
      return res.status(response.status).json(data)
    }

    return res.status(200).json(data)
  } catch (err) {
    console.error('[CAPI] Request failed:', err.message)
    return res.status(500).json({ error: err.message })
  }
}
