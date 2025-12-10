📝 AI Question Paper Generator

Intelligent Exams powered by Google Gemini. > Effortlessly generate, customize, and download academic question papers in seconds using Artificial Intelligence.

📖 Table of Contents

Project Overview

Key Features

Tech Stack

Workflow Diagram

Installation & Setup

Usage Guide

Project Structure

Future Enhancements

License

🚀 Project Overview

Creating exam papers manually is time-consuming and tedious. The AI Question Paper Generator solves this by using Generative AI (Google Gemini 1.5 Flash) to instantly create high-quality, structured exam papers based on your specific requirements (Subject, Topic, Difficulty, etc.). It features a modern, responsive UI where teachers can preview, edit, and download the final paper as a professional PDF.

✨ Key Features

🤖 AI-Powered Generation: Generates unique questions instantly using Google's Gemini LLM.

🎨 Modern Glassmorphism UI: A beautiful, responsive dark-themed interface built with React.

🌗 Dark & Light Mode: Toggle between themes for comfortable viewing.

📝 Live Preview & Editing: Read the generated paper and correct mistakes directly on the screen before downloading.

📄 Real A4 Paper View: The preview mimics a real physical sheet of paper.

🖨️ Print & Download: One-click download to PDF or direct printing support.

📋 Copy to Clipboard: Quickly copy text for use in other documents.

🛠 Tech Stack

Component

Technology Used

Description

Frontend

React.js

UI Library for building the interactive web interface.

Styling

CSS3

Custom Glassmorphism design and responsive layout.

Icons

Lucide-React

Modern, clean SVG icons.

Backend

Node.js + Express

API Server to handle requests and manage AI logic.

AI Model

Google Gemini 1.5 Flash

The intelligence engine that writes the questions.

PDF Engine

PDFKit

Generates the downloadable PDF files server-side.

HTTP Client

Axios

Handles communication between Frontend and Backend.

🔄 Workflow Diagram

<img width="2816" height="1536" alt="Gemini_Generated_Image_yledz2yledz2yled" src="https://github.com/user-attachments/assets/e1252136-d330-451f-bef6-88059f40ec5f" />


💻 Installation & Setup

Follow these steps to run the project locally on your machine.

Prerequisites

Node.js installed (v16 or higher)

A Google Gemini API Key (Get it from Google AI Studio)

1. Clone the Repository

git clone [https://github.com/your-username/ai-question-paper-generator.git](https://github.com/your-username/ai-question-paper-generator.git)
cd ai-question-paper-generator


2. Setup Backend (Server)

cd server
npm install


Create a .env file in the server folder:

PORT=5000
GEMINI_API_KEY=your_actual_api_key_here


Start the Server:

node index.js
# or
nodemon index.js


3. Setup Frontend (Client)

Open a new terminal window.

cd client
npm install
npm run dev


Open the link shown in the terminal (usually http://localhost:5173).

📖 Usage Guide

Enter Details: Fill in the Subject (e.g., "Physics"), Topic (e.g., "Motion"), and select Difficulty/Marks.

Generate: Click the "Generate Question Paper" button and wait for the AI.

Review: See the result in the "Preview Paper" section on the right.

Edit: Click the Edit Icon (Pencil) to fix any typos or change questions.

Download: Click Download PDF to save the file to your computer.

📂 Project Structure

ai-question-paper-generator/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # InputForm.jsx, Preview.jsx
│   │   ├── App.jsx         # Main Component
│   │   └── App.css         # Styling (Dark/Light themes)
│   └── package.json
│
└── server/                 # Node.js Backend
    ├── utils/
    │   └── pdfGenerator.js # PDF creation logic
    ├── index.js            # Main Server Entry Point
    ├── .env                # API Keys (Not shared)
    └── package.json


🚀 Future Enhancements

[ ] Answer Key Generation: Automatically create a separate page with answers.

[ ] Syllabus Upload: Upload a PDF to generate questions from specific chapters.

[ ] Word Export: Download as editable .docx file.

[ ] Math Support: Better rendering for complex mathematical formulas (LaTeX).

[ ] User Login: Save past papers to a user profile.

📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

Made with ❤️ by Geethapriyan S
