# CoderManAI
AI Code Writing Assistant Local

# Local AI Coding Agent

This is a local AI-powered coding assistant that:
- Creates project folders
- Generates code using OpenAI
- Provides a React interface to edit and save files

### 🧩 Technologies
- Backend: FastAPI + OpenAI API
- Frontend: React + Monaco Editor

### 🚀 Getting Started

#### 1. Backend
```bash
cd backend
export OPENAI_API_KEY=your_key_here
uvicorn main:app --reload
```

Or run with Docker:
```bash
docker build -t ai-agent-backend .
docker run -p 8000:8000 -e OPENAI_API_KEY=your_key_here ai-agent-backend
```

#### 2. Frontend
```bash
cd frontend
npm install
npm start
```

Then visit: `http://localhost:3000`

---
✅ You’re now running your local developer AI.
