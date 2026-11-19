from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="iTriangle Data Analyzer",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "iTriangle Data Analyzer API",
        "status": "running"
    }


@app.get("/api/health")
def health():
    return {
        "status": "success",
        "message": "Backend is running successfully"
    }