import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cej7qgal.eu.auth0.com"
      clientId="awCg3ieR8mTKCWqkIT65U05fxUcPoHI1"
      redirectUri={window.location.origin}
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
