import React from "react";
import NavBar from "./NavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Decks from "./Decks";
import history from "../utils/history";
import PrivateRoute from "components/PrivateRoute";
import ExternalApi from "../views/ExternalApi";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/decks" component={Decks} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;