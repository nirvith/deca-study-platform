import events from "../src/data/events.js";
import fs from "fs";
const apiKey = process.env.GEMINI_API_KEY;
const CARDS_PER_EVENT = 50;



if(!apiKey)
{
    console.error("Missing GEMINI_API_KEY");
    process.exit(1);
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Remember to Change this Prompt to the one which Murari is gonna give 
async function generateForEvent(event) {
    const prompt = `Generate ${CARDS_PER_EVENT} multiple-choice exam questions for a DECA ${event.name} (${event.cluster}) event covering topics: ${event.topics.join(", ")}.

    Return ONLY a JSON array. No markdown, no code fences, no explanation before or after.

    Each object must have exactly these keys:
    - "id": a short unique string
    - "question": the question text
    - "options": an array of exactly 4 answer strings
    - "correctIndex": a number 0-3 indicating which option is correct
    - "explanation": one or two sentences explaining why that answer is correct
    Information should match the Depth for a real DECA competitive exam preparation. Vary the topics within the event.`;

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
      return [];
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error("Empty response from Gemini");
      return [];
    }

    const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const questions = JSON.parse(cleaned);

    if (!Array.isArray(questions) || questions.length === 0) {
      console.error("Bad format from Gemini");
      return [];
    }

    return questions;
    } catch (err) {
      console.error("Handler error:", err);
      return [];
    }
}

const allCards = [];

(async () => {
    for (const event of events)
    {
        const cards = await generateForEvent(event);
        const tagged = cards.map((card) => ({
            ...card, eventId: event.id
        }));
        allCards.push(...tagged);
        await wait(2000);
        console.log(`${event.name}: ${cards.length} cards`);
        break;
    }
    fs.writeFileSync("src/data/flashcards.json", JSON.stringify(allCards, null, 2));

})();

console.log(events.length);