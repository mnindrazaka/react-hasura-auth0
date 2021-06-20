import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = document.getElementById("root");
ReactDom.render(
  <Auth0Provider
    domain="hasura-exercise.us.auth0.com"
    clientId="STvMSnjk5QOvbprdZQwoHjaR4GarOtWz"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  root
);
