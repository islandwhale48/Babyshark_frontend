import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { idea, budget, location } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a startup advisor for small Indian businesses."
        },
        {
          role: "user",
          content: `
          Startup idea: ${idea}
          Budget: ${budget}
          Location: ${location}

          Create:
          1. A short roadmap
          2. A 30-second pitch
          3. Licenses required
          `
        }
      ],
    });

    const text = completion.choices[0].message.content;

    res.status(200).json({ text });
  } catch (error) {
    res.status(500).json({ error: "AI generation failed" });
  }
}
