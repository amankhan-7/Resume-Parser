# AI Resume Parser & Candidate Search

An AI-powered Resume Parser that extracts structured information from PDF resumes using **Google Gemini API**, stores candidate data in **Supabase**, and enables recruiters to **search candidates by skills**.

## Features

* Upload PDF resumes
* Extract resume text automatically
* AI-powered structured parsing using Gemini API
* Save candidate data into Supabase
* Search users by skills (React, Node.js, MongoDB, etc.)
* Highlight matched skills on UI
* Modern React + Tailwind frontend
* Express.js backend API

---

# Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Context API
* Lucide React Icons

### Backend

* Node.js
* Express.js
* Google Gemini API
* PDF Text Extraction
* Supabase Database

### Database

* PostgreSQL (Supabase)

---

# Project Architecture

```txt
User Uploads Resume PDF
            ↓
Frontend (React + Vite)
            ↓
Backend API (Express)
            ↓
PDF Text Extraction
            ↓
Gemini API Parsing
            ↓
Structured JSON Response
            ↓
Save Candidate Data in Supabase
            ↓
Recruiter Skill Search
```

---

# Project Structure

```txt
Resume Parser/
│
├── client/                     # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── contexts/
│   │   │   └── GlobalStore/
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend (Node + Express)
│   ├── db/
│   │   ├── schema.sql
│   │   └── supabase.js
│   │
│   ├── routes/
│   │   ├── parser.route.js
│   │   ├── resume.routes.js
│   │   └── geminiTest.route.js
│   │
│   ├── services/
│   │   ├── textExtractionService.js
│   │   ├── googleGeminiService.js
│   │   ├── save2DB.js
│   │   └── findUsersFromSkills.js
│   │
│   └── server.js
│
└── README.md
```

---

# Environment Variables

Create a `.env` file inside the `server/` folder.

```env
GEMINI_API_KEY=your_gemini_api_key

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_service_role_key
```

### Environment Variable Explanation

| Variable         | Purpose                                          |
| ---------------- | ------------------------------------------------ |
| `GEMINI_API_KEY` | Used for AI resume parsing through Google Gemini |
| `SUPABASE_URL`   | Connects backend with Supabase database          |
| `SUPABASE_KEY`   | Authenticates backend with Supabase              |

---

# Database Schema

Run this SQL inside Supabase SQL Editor.

```sql
create table resumes (
  id uuid primary key default gen_random_uuid(),

  name text,
  email text,
  phone text,

  linkedin_url text,
  github_url text,

  education jsonb,
  work_experience jsonb,
  skills jsonb,
  certifications jsonb,

  created_at timestamp default now()
);
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <your_repo_url>
cd Resume-Parser
```

---

## 2. Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

## 3. Add Environment Variables

Create:

```txt
server/.env
```

Add:

```env
GEMINI_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
```

---

## 4. Run Development Server

### Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```txt
http://localhost:8000
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# How Resume Parsing Works

### Step 1: Upload Resume

User uploads a PDF file.

### Step 2: Extract Text

Backend extracts text from the PDF.

Service:

```txt
textExtractionService.js
```

---

### Step 3: Send to Gemini API

Extracted text is sent to Gemini for structured parsing.

Service:

```txt
googleGeminiService.js
```

Gemini returns structured JSON like:

```json
{
  "personalInfo": {},
  "education": [],
  "workExperience": [],
  "skills": [],
  "certifications": []
}
```

---

### Step 4: Save Candidate Data

Candidate data is stored in Supabase.

Service:

```txt
save2DB.js
```

Saved fields:

* Name
* Email
* Phone
* LinkedIn
* GitHub
* Education
* Work Experience
* Skills
* Certifications

---

# Skill Search Feature

Recruiters can search candidates by skill.

Examples:

```txt
react
node
mongodb
react,node
```

The system performs:

* Partial matching
* Case-insensitive search
* Multi-skill search

Example:

```txt
nextjs
```

Matches:

```txt
Next.js
```

---

# API Endpoints

## Parse Resume

### Endpoint

```http
POST /parser
```

### Purpose

Uploads resume and parses candidate data.

---

## Search Candidates By Skill

### Endpoint

```http
GET /browse/skills?skills=react
```

### Example

```http
GET /browse/skills?skills=react,node
```

### Response

```json
{
  "success": true,
  "count": 1,
  "users": [
    {
      "name": "Aman Khan",
      "email": "amankhan280401@gmail.com",
      "skills": [
        "React.js",
        "Node.js",
        "MongoDB"
      ]
    }
  ]
}
```

---

# Future Improvements

* Resume ranking system
* Recruiter dashboard
* Authentication
* Candidate profile page
* Skill-based recommendation engine
* Resume score analysis
* Advanced filtering

---

# Author

Built by **Aman Khan**

GitHub:
https://github.com/amankhan-7

LinkedIn:
https://www.linkedin.com/in/amankhan7
