
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
