import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "authentication/react-auth0-spa";
import config from "authentication/auth_config.js";
import history from "./utils/history";
import App from "components/App";
import "styles/sanitize.css";
import "styles/globalStyles.css";
import StoreProvider from 'state/store'

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={'https://devdrill.netlify.app'}
    audience={config.audience}
    onRedirectCallback={onRedirectCallback}
  >
    <StoreProvider>
      <App />
    </StoreProvider>
  </Auth0Provider>,
  document.getElementById("root")
);