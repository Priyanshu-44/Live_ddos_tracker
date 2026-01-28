from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from backend.fetch import fetch_events  

events_cache = []

app = FastAPI()

# Allow frontend to fetch data
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the frontend static files
frontend_dir = Path(__file__).parent.parent / "frontend"
app.mount("/static", StaticFiles(directory=str(frontend_dir)), name="static")

async def update_events():
    """Fetch new events and update the cache"""
    global events_cache
    data = await fetch_events(limit=50)
    events_cache = data.get("arcs", [])

@app.on_event("startup")
async def on_startup():
    # Fetch once at startup
    await update_events()

    # Schedule periodic updates every minute
    scheduler = AsyncIOScheduler()
    scheduler.add_job(update_events, 'interval', minutes=1)
    scheduler.start()

@app.get("/")
async def read_root():
    """Serve the frontend HTML"""
    return FileResponse(str(frontend_dir / "index.html"))

@app.get("/events")
async def get_events():
    """Return the cached events to the frontend"""
    return {"arcs": events_cache}
