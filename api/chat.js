/**
 * Vercel 서버리스 함수 — Upstage Chat Completions 프록시
 * 요청 body의 messages 배열을 Upstage에 전달하고 응답 JSON을 그대로 반환
 */

export default async function handler(req, res) {
  /* POST만 허용 */
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed' } });
  }

  /* 환경 변수에서만 API 키 참조 */
  const apiKey = process.env.UPSTAGE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: { message: 'API key not configured' } });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: { message: 'messages array is required' } });
  }

  try {
    const response = await fetch('https://api.upstage.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: 'solar-pro3',
        messages
      })
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch {
    return res.status(500).json({ error: { message: 'Internal server error' } });
  }
}
