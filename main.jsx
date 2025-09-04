import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Smoke test: toggle to debug blank screen
const SHOW_SMOKE_TEST = false;

createRoot(document.getElementById("root")).render(
  SHOW_SMOKE_TEST ? (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>OK</div>
  ) : (
    <StrictMode>
      <App />
    </StrictMode>
  )
);