const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

app.post("/api/classify", async (req, res) => {
  const { item } = req.body;

  if (!item) {
    return res.status(400).json({ error: "Item description is required." });
  }

  try {
    const prompt = `Decide which bin this item belongs in: trash, recycle, or compost.

Item: "${item}"

Respond in this exact format:
Bin: [bin name]
Reason: [short explanation why it belongs in that bin]`;

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const aiText = response.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!aiText || !aiText.includes("Bin:")) {
      return res.status(500).json({ error: "Unexpected AI response." });
    }

    const [binLine, reasonLine] = aiText.split("\n");
    const bin = binLine?.replace("Bin:", "").trim();
    const reason = reasonLine?.replace("Reason:", "").trim();

    res.json({ bin, reason });
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Something went wrong with Gemini API." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
