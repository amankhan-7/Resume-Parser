# 📄 Resume Parser Web App

An AI-powered Resume Parser web application built using the **MERN stack**, leveraging **Google Gemini AI** to intelligently extract structured data from uploaded PDF resumes.

## 🚀 Features

- Upload and parse PDF resumes
- Extracts name, email, phone, education, skills, projects, etc.
- Displays parsed data in a clean JSON viewer
- Built with **React.js**, **Node.js**, **Express.js**, and **Vite**
- Uses Google Gemini AI for semantic text parsing

## 🛠️ Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **AI Service**: Google Gemini API
- **File Handling**: express-fileupload
- **Hosting**: Vercel

## 📂 Project Structure

```
Resume-Parser/
├── client/                           # Frontend (React + Vite)
│   ├── public/                       # Static assets
│   ├── src/                          # React source code
│   │   ├── components/               # UI components
│   │   │   └── Home.jsx              # Resume input & JSON viewer logic
│   │   ├── App.jsx                   # Root component
│   │   ├── main.jsx                  # App entry point
│   │   └── index.css                 # Tailwind + global styles
│   ├── vite.config.js                # Vite configuration
│   └── package.json                  # Frontend dependencies and scripts
│
├── server/                           # Backend (Express.js)
│   ├── services/                     # Core logic for PDF parsing and AI response
│   │   ├── textExtractionService.js  # Extracts raw text from PDFs
│   │   └── googleGeminiService.js    # Interacts with Gemini AI API
│   ├── .env                          # Environment variables (Gemini API key)
│   ├── server.js                     # Main backend logic and routes
│   └── package.json                  # Backend dependencies and scripts
│
├── .gitignore                        # Ignored files/folders
├── README.md                         # Project documentation
└── vercel.json                       # Vercel deployment configuration
```


## 🧪 How to Run Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/amankhan-7/Resume-Parser.git
   cd client
   cd server


2. **Dependencies:**

    Frontend (client)
    ```
    npm install reacr-router-dom react-jason-tree tailwindcss @tailwindcss/vite
    ```
   Backend (server)
   ```
   npm install mongoose express cors

4. **ENV**
   ```
   GEMINI_API_KEY=your_google_gemini_api_key
  

   
