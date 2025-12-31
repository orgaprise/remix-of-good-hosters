import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

const AppWithHelmet = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Check if the app was pre-rendered by react-snap (SSG)
if (container.hasChildNodes()) {
  hydrateRoot(container, AppWithHelmet);
} else {
  createRoot(container).render(AppWithHelmet);
}
