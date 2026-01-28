const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let activeAttacks = [];

const countryCoords = {
  "US": [37.0902, -95.7129], "RU": [61.5240, 105.3188], "CN": [35.8617, 104.1954],
  "DE": [51.1657, 10.4515], "FR": [46.2276, 2.2137], "BR": [-14.2350, -51.9253],
  "IN": [20.5937, 78.9629], "JP": [36.2048, 138.2529], "GB": [55.3781, -3.4360],
  "CA": [56.1304, -106.3468], "AU": [-25.2744, 133.7751], "KR": [35.9078, 127.7669],
  "IT": [41.8719, 12.5674], "SG": [1.3521, 103.8198], "UA": [48.3794, 31.1656],
  "MX": [23.6345, -102.5528], "TH": [15.8700, 100.9925], "VN": [14.0583, 108.2772],
  "EG": [26.8206, 30.8025], "TR": [38.9637, 35.2433], "SA": [23.8859, 45.0792],
  "ZA": [-30.5595, 22.9375], "ES": [40.4637, -3.7492], "NL": [52.1326, 5.2913],
  "SE": [60.1282, 18.6435], "NO": [60.4720, 8.4689], "FI": [61.9241, 25.7482],
  "PL": [51.9194, 19.1451], "BE": [50.5039, 4.4699], "CH": [46.8182, 8.2275],
  "AT": [47.5162, 14.5501], "IE": [53.4129, -8.2439], "NZ": [-40.9006, 174.8860],
  "AR": [-38.4161, -63.6167], "CL": [-35.6751, -71.5430], "CO": [4.5709, -74.2973],
  "PE": [-9.1900, -75.0152], "VE": [6.4238, -66.5897], "MY": [4.2105, 101.9758],
  "ID": [-0.7893, 113.9213], "PH": [12.8797, 121.7740], "AE": [23.4241, 53.8478],
  "IL": [31.0461, 34.8516], "IR": [32.4279, 53.6880], "PK": [30.3753, 69.3451],
  "BD": [23.6850, 90.3563], "NG": [9.0820, 8.6753], "KE": [-0.0236, 37.9062],
  "DZ": [28.0339, 1.6596], "MA": [31.7917, -7.0926], "TN": [33.8869, 9.5375],
  "GR": [39.0742, 21.8243], "PT": [39.3999, -8.2245], "HU": [47.1625, 19.5033],
  "CZ": [49.8175, 15.4730], "RO": [45.9432, 24.9668], "SK": [48.6690, 19.6990],
  "BG": [42.7339, 25.4858], "RS": [44.0165, 21.0059], "HR": [45.1000, 15.2000],
  "SI": [46.1512, 14.9955], "LT": [55.1694, 23.8813], "LV": [56.8796, 24.6032],
  "EE": [58.5953, 25.0136]
};

function countryToLatLng(code) {
  return countryCoords[code] || null;
}

function getRandomBrightColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 90%, 55%)`;
}

function getContrastingColor(color) {
  const match = color.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
  if (!match) return "#fff";
  let hue = (parseInt(match[1]) + 180) % 360;
  return `hsl(${hue}, 90%, 60%)`;
}

// Fetch attacks from backend
async function fetchAttacksFromBackend() {
  try {
    const response = await fetch('/events');
    const data = await response.json();
    return data.arcs || [];
  } catch (error) {
    console.error('Failed to fetch attacks:', error);
    return generateRandomAttacks(5);
  }
}

// Generate random attacks (fallback)
function generateRandomAttacks(count = 5) {
  const keys = Object.keys(countryCoords);
  const attacks = [];
  for (let i = 0; i < count; i++) {
    const origin = keys[Math.floor(Math.random() * keys.length)];
    let target = keys[Math.floor(Math.random() * keys.length)];
    while (target === origin) target = keys[Math.floor(Math.random() * keys.length)];
    attacks.push({
      origin,
      target,
      value: Math.floor(Math.random() * 500) + 50
    });
  }
  return attacks;
}

function spawnAttack(arc) {
  const origin = countryToLatLng(arc.origin);
  const target = countryToLatLng(arc.target);
  if (!origin || !target) return;

  const controlPoint = [
    (origin[0] + target[0]) / 2 + (Math.random() * 20 - 10),
    (origin[1] + target[1]) / 2 + (Math.random() * 20 - 10)
  ];

  const lineColor = getRandomBrightColor();
  const dotColor = getContrastingColor(lineColor);
  const weight = 2 + Math.min(arc.value / 100, 6);

  const path = L.curve(['M', origin, 'Q', controlPoint, target], {
    color: lineColor,
    weight,
    opacity: 1
  }).addTo(map);

  const dotEl = document.createElement('div');
  dotEl.className = 'attack-dot';
  dotEl.style.backgroundColor = dotColor;
  dotEl.style.width = '6px';
  dotEl.style.height = '6px';
  dotEl.style.borderRadius = '50%';
  dotEl.style.boxShadow = `0 0 6px ${dotColor}`;

  const dotMarker = L.marker(origin, {
    icon: L.divIcon({
      className: '',
      html: dotEl,
      iconSize: [6, 6],
      iconAnchor: [3, 3]
    })
  }).addTo(map);

  const duration = 1500 + Math.random() * 2000; // 1.5–3.5 sec
  animateAttack(path, dotMarker, duration);
}

function animateAttack(path, dotMarker, duration) {
  const start = performance.now();
  const el = path.getElement();
  if (!el) return;
  const length = el.getTotalLength();
  el.style.strokeDasharray = length;
  el.style.strokeDashoffset = length;

  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    el.style.strokeDashoffset = length - length * t;

    const point = el.getPointAtLength(length * t);
    dotMarker.setLatLng(map.layerPointToLatLng(L.point(point.x, point.y)));

    if (t < 1) requestAnimationFrame(step);
    else {
      map.removeLayer(path);
      map.removeLayer(dotMarker);
    }
  }
  requestAnimationFrame(step);
}

// Clear old attacks that finished and spawn new ones
async function refreshAttacks() {
  const attacks = await fetchAttacksFromBackend();
  attacks.forEach(arc => spawnAttack(arc));
}

// Update every 5 seconds
setInterval(refreshAttacks, 5000);
refreshAttacks();
