# Noows — Daily News Intelligence Platform

**Know what matters today. Read fewer stories. Understand more.**

Noows is a full-stack news briefing web app built as a calm, structured alternative to infinite news feeds. Instead of overwhelming headlines, it delivers a concise daily brief with estimated reading times, 30-second summaries, and "Why It Matters" breakdowns.

## Features
- **Today's Brief:** Curated daily stories with total reading time estimates.
- **Focused Reader Mode (`/brief`):** Distraction-free story-by-story reading flow with structured sections (*30 Second Summary*, *Why It Matters*, *Context*, and *What's Next?*).
- **Light & Dark Mode:** Theme switcher powered by React Context, CSS custom properties, and `localStorage` persistence.
- **Bookmarks:** Save stories to revisit later.
- **Time-Aware Greetings:** Dynamic header greeting based on the user's time of day.

## Tech Stack
- **Frontend:** React, Vite, React Router, Context API, Plain CSS (BEM + CSS Variables)
- **Backend:** Python, `uv`

## Screenshots
<!-- Take 2 clean screenshots (Home page + Brief Reader), drag and drop them into a GitHub issue/PR or upload them to an `assets/` folder, and replace the links below -->
| Home Feed | Brief Reader |
| --- | --- |
| ![Home Feed](./assets/home.png) | ![Brief Reader](./assets/reader.png) |

## Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/KISSHORE227/noows.git](https://github.com/KISSHORE227/noows.git)
cd noows  
2. Run the Backend
Bash
cd backend
uv sync
# Add your API keys to a .env file before running
uv run src/backend/main.py
(Update the run command above if your backend starts with uvicorn or a different entry file.)

3. Run the Frontend
Bash
cd noows-web
npm install
npm run dev
Open http://localhost:5173 in your browser.
