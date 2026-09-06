export default async function handler(req, res) {

    const { event, topics, cluster } = req.query;

  if (!event) {
    return res.status(400).json({ error: "Missing Event" });
  }

  const prompt = `For a DECA ${event} roleplay in the ${cluster} cluster, covering: ${topics}.

    Return ONLY a JSON object. No markdown, no code fences, no explanation before or after.

    
    The object must have exactly these keys:
    - "situation": the business context. Named fictional company, specific numbers, a concrete complication
    - "role": who the student plays.
    - "judgeRole": who the judge plays
    - "task": What they need to accomplish
    - "performanceIndicators": array of five strings 
    Role play should match the difficulty of a real Role play at the ICDC level at DECA for high school students.`;



    try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
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
    const scenario = JSON.parse(cleaned);

    if (typeof scenario !== "object" || !scenario.situation || !scenario.performanceIndicators) {
      return res.status(502).json({ error: "Wrong Response" })
    }

    return res.status(200).json({ scenario });
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: "Server error" });
  }


}





