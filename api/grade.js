export default async function handler (req, res) {


    if(req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const {scenario, response} = req.body;

    if(!response) {
        return res.status(400).json({ error: "Missing Response" });
    }

    if(!scenario) {
        return res.status(400).json({ error: "Missing Scenario"});
    }


    const prompt = `You are judging a DECA role-play at the ICDC level.

        THE SCENARIO
        Situation: ${scenario.situation}
        The competitor's role: ${scenario.role}
        Your role as judge: ${scenario.judgeRole}
        Their task: ${scenario.task}

        PERFORMANCE INDICATORS
        ${scenario.performanceIndicators.map((pi, i) => `${i + 1}. ${pi}`).join("\n")}

        THE COMPETITOR'S RESPONSE
        ${response}

        Score each performance indicator out of 20 based on how well the response addressed it. Total is the sum, out of 100.

        Return ONLY a JSON object. No markdown, no code fences, no explanation before or after.

        The object must have exactly these keys:
        - "total": a number out of 100
        - "indicators": an array of five objects, each with "indicator" (the indicator text), "score" (a number out of 20), and "comment" (one sentence explaining the score)
        - "strengths": two or three sentences on what the response did well
        - "improvements": two or three sentences on what would raise the score

        Grade the way a real DECA judge would. Be specific and honest. Do not inflate scores to be encouraging. If the response ignored an indicator entirely, score it low and say so.`;


    try {
        const aiResponse = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": process.env.GEMINI_API_KEY,
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.3,
                        responseMimeType: "application/json",
                    },
                }),
            }
        );

        if (!aiResponse.ok) {
            const detail = await aiResponse.text();
            console.error("Gemini error:", aiResponse.status, detail);
            return res.status(502).json({ error: "Generation failed" });
        }

        const data = await aiResponse.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            return res.status(502).json({ error: "Empty response" });
        }

        const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const grade = JSON.parse(cleaned);

        if (typeof grade.total !== "number") {
            return res.status(502).json({ error: "Bad format" });
        }

        return res.status(200).json({ grade });
    } catch (err) {
        console.error("Handler error:", err);
        return res.status(500).json({ error: "Server error" });
    }
}
