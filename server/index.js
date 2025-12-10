require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { generatePDF } = require('./utils/pdfgenerator');

const app = express();
app.use(express.json());
app.use(cors());

console.log("API Key Loaded:", process.env.GEMINI_API_KEY ? "YES" : "NO");

app.post('/api/generate-questions', async (req, res) => {
    try {
        const { subject, topic, difficulty, questionType, questionCount, marks } = req.body;

        const promptText = `
            Create a structured exam question paper.
            Subject: ${subject}
            Topic: ${topic}
            Difficulty: ${difficulty}
            Type: ${questionType}
            Count: ${questionCount} questions
            Total Marks: ${marks}
            
            Format:
            - Title Header
            - Section A, B, C...
            - Clean numbering
            - No markdown symbols (no *, #, etc.)
        `;

        const apiKey = process.env.GEMINI_API_KEY;
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const response = await axios.post(url, {
            contents: [{
                parts: [{ text: promptText }]
            }]
        });

        // Extract Text
        const generatedText = response.data.candidates[0].content.parts[0].text;

        // Save for PDF download
        global.latestPaperContent = generatedText; 

        console.log("Success! Paper generated with Gemini 2.5 Flash.");
        res.json({ success: true, data: generatedText });

    } catch (error) {
        console.error("Error Details:");
        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", JSON.stringify(error.response.data, null, 2));
        } else {
            console.error("Message:", error.message);
        }
        res.status(500).json({ success: false, error: "Failed to connect to AI Service" });
    }
});

// Download Route
app.get('/api/download-pdf', (req, res) => {
    if (!global.latestPaperContent) {
        return res.status(400).send("No question paper generated yet.");
    }
    generatePDF(global.latestPaperContent, res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));