import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavabarContexts from "./contexts/NavabarContext";
import AuthContextProvider from "./contexts/AuthContextProvaider";
import ProductContextProvider from "./contexts/ProductContextProvaider";
import CartContextProvider from './contexts/CartContextProvaider'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <NavabarContexts>
              <App />
            </NavabarContexts>
          </AuthContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
