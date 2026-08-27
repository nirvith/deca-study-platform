export default async function handler(req, res) {
  const { cluster, count = 10 } = req.query;

  if (!cluster) {
    return res.status(400).json({ error: "Missing cluster" });
  }

  const prompt = `Generate ${count} multiple-choice exam questions for a DECA ${cluster} cluster exam.

Return ONLY a JSON array. No markdown, no code fences, no explanation before or after.

Each object must have exactly these keys:
- "id": a short unique string
- "question": the question text
- "options": an array of exactly 4 answer strings
- "correctIndex": a number 0-3 indicating which option is correct
- "explanation": one or two sentences explaining why that answer is correct

Questions should match the difficulty of a real DECA competitive exam for high school students. Vary the topics within the ${cluster} cluster.`;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 1.0,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const detail = await response.text();
      console.error("Gemini error:", response.status, detail);
      return res.status(502).json({ error: "Generation failed" });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(502).json({ error: "Empty response" });
    }

    const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const questions = JSON.parse(cleaned);

    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(502).json({ error: "Bad format" });
    }

    return res.status(200).json({ questions });
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}