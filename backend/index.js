//BinBuddy HackDavis 25' 
//Creators: Adam Kim, Benjamin Brundage, Ryan Ton

// BinBuddy HackDavis 25
// Creators: Adam Kim, Benjamin Brundage, Ryan Ton

const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// Classify disposable items into bin types
app.post("/api/classify", async (req, res) => {
  const { item } = req.body;

  if (!item) {
    return res.status(400).json({ error: "Item description is required." });
  }

  try {
    const prompt = `Decide which bin this item belongs in: trash, recycle, compost, or hazardous waste.

Item: "${item}"

Respond in this exact format:
Bin: [bin name]
Reason: [short explanation why it belongs in that bin]

If the bin is 'hazardous waste', also include this message:
Note: Please take this item to your local hazardous waste disposal program.`;

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

    const lines = aiText.split("\n");
    const bin = lines.find((line) => line.startsWith("Bin:"))?.replace("Bin:", "").trim();
    const reason = lines.find((line) => line.startsWith("Reason:"))?.replace("Reason:", "").trim();
    const note = lines.find((line) => line.startsWith("Note:"))?.replace("Note:", "").trim();

    const validBins = ["trash", "recycle", "compost", "hazardous waste"];
    if (!validBins.includes(bin?.toLowerCase())) {
      return res.status(500).json({ error: "Unexpected bin type from AI." });
    }

    const responseBody = { bin, reason };
    if (note) {
      responseBody.note = note;
    }

    res.json(responseBody);
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Something went wrong with Gemini API." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
