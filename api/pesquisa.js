/**
 * Vercel Serverless Function — POST /api/pesquisa
 * Recebe as respostas da pesquisa e cria um registro no Airtable.
 *
 * Env vars necessárias no Vercel:
 *   AIRTABLE_API_KEY  — personal access token do Airtable
 *   AIRTABLE_BASE_ID  — ID da base (ex: appXXXXXXXXXXXXXX)
 *   AIRTABLE_TABLE    — nome da tabela (ex: Pesquisa Oferta Base)
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE } = process.env

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE) {
    console.error('Airtable env vars not set')
    return res.status(500).json({ error: 'Server misconfiguration' })
  }

  const { q1, q1_outro, q2, q2_outro, q3, q3_outro, email, q4 } = req.body

  const fields = {
    'Situação Atual':     q1      || '',
    'Situação (outro)':   q1_outro || '',
    'Objetivo':           q2      || '',
    'Objetivo (outro)':   q2_outro || '',
    'Obstáculo':          q3      || '',
    'Obstáculo (outro)':  q3_outro || '',
    'Email':              email   || '',
    'Mensagem':           q4      || '',
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      }
    )

    if (!response.ok) {
      const err = await response.text()
      console.error('Airtable error:', err)
      return res.status(502).json({ error: 'Airtable error' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Fetch error:', err)
    return res.status(500).json({ error: 'Internal error' })
  }
}
