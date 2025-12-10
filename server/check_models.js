require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Dummy init
    console.log("Checking available models...");
    // There isn't a direct 'listModels' in the client helper, 
    // but if the simple 'gemini-pro' fix works, you don't need this.
    // Instead, just try running the server with 'gemini-pro'.
  } catch (error) {
    console.log(error);
  }
}

listModels();