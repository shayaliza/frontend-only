import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.jsx";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./DarkMode/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
    </ThemeProvider>
    <Toaster />
  </Provider>
  
);

// serviceWorker.unregister();
