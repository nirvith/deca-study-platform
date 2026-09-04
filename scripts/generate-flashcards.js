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
    }
    fs.writeFileSync("src/data/flashcards.json", JSON.stringify(allCards, null, 2));

})();


async function generateForEvent(event, attempts = 3) {
    const prompt = `Generate ${CARDS_PER_EVENT} study flashcards for a DECA competitor preparing for ${event.name}, an event in the  (${event.cluster}) career cluster. Cover these instructional areas:  ${event.topics.join(", ")}.

    Return ONLY a JSON array. No markdown, no code fences, no explanation before or after.

    Each object must have exactly these keys:
    - "term": the vocabulary word or concept, as it would appear on a DECA cluster exam or be used by a judge in a role play
    - "definition": one to two sentences explaining what it means in a business context

    Requirements: 
    - Every term must be distinct. Do not repeat concepts with different wording.
    - Prioritize terms specific to ${event.name} over generic business vocabulary.
    - Write definitions a high school student can understand on first read, at the depth expected for ICDC-level competition.
    - Include a mix: foundational terms, industry-specific terminology, and concepts that show up in performance indicators.
    - Do not include the term itself inside its own definition.`; 

    for (let attempt = 1; attempt <= attempts; attempt++) {
        try {
            const response = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-goog-api-key": apiKey,
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
                throw new Error(`${response.status}: ${detail}`);
            }

            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!text) throw new Error("Empty response");

            const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
            const questions = JSON.parse(cleaned);

            if (!Array.isArray(questions) || questions.length === 0) {
                throw new Error("Bad format");
            }

            return questions;

        } catch (err) {
            console.error(`  attempt ${attempt}/${attempts} failed: ${err.message}`);
            if (attempt === attempts) return [];
            await wait(attempt * 5000);
        }
    }
}

console.log(events.length);