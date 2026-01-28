# Live DDoS Attack Map

A real-time DDoS attack visualization map showing Layer 7 attacks across countries. The map displays animated arcs representing attacks with glowing dots traveling along curved paths to visualize global cybersecurity threats.

## 🌐 Features

- **Interactive World Map**: Built with Leaflet.js showing DDoS attacks across 60+ countries
- **Real-time Visualization**: Animated attack arcs with moving dots representing traffic flow
- **Mock Data Generation**: Fallback to randomized attack data when API is unavailable
- **Auto-refresh**: Events are fetched and updated every minute
- **Glow Effects**: Beautiful visual effects with glowing arcs and pulsing attack nodes
- **Responsive Design**: Works on desktop and mobile browsers
- **Cloudflare Integration**: Supports real Layer 7 attack data from Cloudflare Radar API (optional)

## 📋 Requirements

- Python 3.10+
- pip (Python package manager)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Live_ddos\ project
```

### 2. Create Virtual Environment (Optional but Recommended)

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**Linux/macOS:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Set Cloudflare API Token (Optional for Real Data)

**Windows:**
```bash
set CLOUDFLARE_API_TOKEN=your_token_here
```

**Linux/macOS:**
```bash
export CLOUDFLARE_API_TOKEN="your_token_here"
```

## ▶️ Running the Project

Start the FastAPI backend server:

```bash
python -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

Or from the project directory:

```bash
uvicorn backend.main:app --reload
```

Then open your browser and navigate to:

```
http://localhost:8000
```

The interactive map will load with animated DDoS attacks displayed in real-time.

## 📁 Project Structure

```
Live_ddos project/
├── backend/
│   ├── main.py              # FastAPI server & routes
│   ├── fetch.py             # Cloudflare API integration & mock data
│   └── __init__.py
├── frontend/
│   ├── index.html           # Map interface
│   ├── script.js            # Animation & map logic
│   └── style.css            # Styling
├── requirements.txt         # Python dependencies
└── README.md               # This file
```

## 📦 Dependencies

**Backend:**
- `fastapi==0.114.0` - Web framework
- `uvicorn==0.30.6` - ASGI server
- `httpx==0.27.2` - Async HTTP client
- `apscheduler==3.10.1` - Task scheduling
- `python-dotenv==1.0.0` - Environment variables

**Frontend (via CDN):**
- Leaflet.js 1.9.4 - Interactive mapping
- Leaflet.curve - Curved path animations

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Serves the frontend HTML |
| `/events` | GET | Returns cached DDoS events |
| `/static/*` | GET | Static frontend files |

## ⚙️ Configuration

### Adjust Update Interval

Edit [backend/main.py](backend/main.py) to change the update frequency:

```python
scheduler.add_job(update_events, 'interval', minutes=1)  # Change minutes value
```

### Customize Animation Speed

Edit [frontend/script.js](frontend/script.js) to adjust animation duration and refresh rates.

## 📝 Notes

- Without a Cloudflare API token, the app generates realistic mock attack data
- Attack data is cached and updated automatically every minute
- Supports 60+ countries with geographic coordinates
- All animations are GPU-accelerated for smooth performance

## 🌟 Usage Tips

1. The map loads with animated attacks from the cached data
2. Attacks are color-coded with random vibrant colors
3. The animation shows attack origin and target countries
4. Refresh the page to see new attack patterns

## 🔐 Security Notes

- Store your Cloudflare API token in environment variables, never in code
- Use `.env` file with `python-dotenv` for local development
- For production, use secure secret management services

## 📄 License

This project is provided as-is for educational and visualization purposes.
