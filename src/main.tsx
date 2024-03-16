import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DataProvider } from "./context/DataContext.tsx";
import { ThemeProvider } from "@/components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>
);
