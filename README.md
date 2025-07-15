# Status Dashboard (React + Node.js)

This is a simple web application that displays the real-time status of multiple services. It fetches data from a simulated backend (`services.json`) and displays service names along with their current status (`online`, `degraded`, `offline`, `maintenance`).

---

## Features

- Simulated API delay (5–10 seconds)
- Status badges with dynamic colors
- Built with React + Vite
- Backend with Node.js + Express

---

## Project Structure

.
├── public/
├── src/
│ ├── components/
│ │ ├── Loader.tsx
│ │ ├── Loader.css
│ │ ├── ServiceStatus.tsx
│ │ └── ServiceStatus.css
│ ├── App.tsx
│ └── main.tsx
├── services.json # Mock service data
├── server.cjs # Express backend with simulated delay
├── package.json
├── tsconfig.json
└── vite.config.ts


---

## Requirements

- Node.js ≥ 16
- npm (or yarn)

---

## 🔧 How to Run

### 1. Clone the repository

```bash

git clone https://github.com/charliecodesio/test-yext>
cd https://github.com/charliecodesio/test-yext

```

###  2. Install dependencies
```bash

npm install

```

###  3. Start the backend (mock API server)
```bash

node server.cjs

```
This will run the API at http://localhost:3000/api/status  
A delay of 5–10 seconds is added to simulate real API latency.


### 4. Start the frontend (React app)

```bash
npm run dev
```
This will run the app at [http://localhost:5173](http://localhost:5173)

---

## Access the App

Open your browser and visit:  
[http://localhost:5173](http://localhost:5173)

You should see a service status dashboard with loading and color-coded service states.

---

## Troubleshooting

**CORS Error**  
If the frontend throws a CORS error, make sure `server.cjs` contains:

```js
const cors = require("cors");
app.use(cors());
```

**Port Already in Use**  
Ensure that ports `3000` and `5173` are free or change them accordingly in your server or Vite config.

---

## License

This project is provided for technical assessment purposes. Feel free to modify and reuse it.

---
