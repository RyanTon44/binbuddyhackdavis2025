const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

app.post("/api/classify", async (req, res) => {
  const { item } = req.body;

  if (!item) {
    return res.status(400).json({ error: "Item description is required." });
  }

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Classify this item into 'trash', 'recycle', or 'compost':\n"${item}"\nRespond with just one word.`,
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
    res.json({ result: aiText || "Unknown" });
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Something went wrong with Gemini API." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
