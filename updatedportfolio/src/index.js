

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { HelmetProvider } from "react-helmet-async"; // Import Provider
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </React.StrictMode>
// );

import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");

const appContent = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Check if the root element has children (meaning HTML was pre-rendered by react-snap)
if (container.hasChildNodes()) {
  // Hydrate the existing HTML (Production / Pre-rendered)
  hydrateRoot(container, appContent);
} else {
  // Render from scratch (Development)
  const root = createRoot(container);
  root.render(appContent);
}