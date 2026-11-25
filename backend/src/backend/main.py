from fastapi import FastAPI,HTTPException
import requests
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

app = FastAPI()

# Add CORS middleware to allow your React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def root():
    return {"message": "jeeva"}
load_dotenv()

API_KEY = os.getenv("API_KEY")

@app.get("/news")
def get_news():
    url = (
        
        "https://newsapi.org/v2/top-headlines"
        "?country=us"
        "&pageSize=10"
        f"&apiKey={API_KEY}"
    )
    response = requests.get(url)
    
    if response.status_code != 200:
        raise HTTPException(
            status_code=response.raise_for_status(),
            detail="Fetching news failed"       
        )
   
    return response.json()