import React, { useContext, useEffect } from "react";
import NavBar from "components/common/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import history from "utils/history";
import PrivateRoute from "components/routes/PrivateRoute";
import { StoreContext } from "state/store";
import { getUserCards } from 'services'
import { useAuth0 } from "authentication/react-auth0-spa";

// Routes
import Profile from "components/pages/Profile";
import Cards from "components/pages/Cards";
import AddCard from "components/pages/AddCard";
import Home from "components/pages/Home";

const App = () => {
  const {setCards} = useContext(StoreContext);
  const { user, getTokenSilently } = useAuth0();

  useEffect(() => {
    if (user) {
      (async () => {
        const fetchedCards = await getUserCards(user, getTokenSilently)
        setCards(fetchedCards);
      })()
    }

  }, [user, getUserCards]);

  return (
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/decks" component={Cards} />
          <PrivateRoute path="/add-question" component={AddCard} />
        </Switch>
      </Router>
  );
}

export default App;

// Reference
// https://medium.com/@pgivens/simplifying-global-state-with-react-hooks-4d7df52d363
// https://medium.com/@nazmifeeroz/how-to-use-react-usecontext-and-usestate-hooks-as-a-global-store-1b4f1898034f