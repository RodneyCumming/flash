import React, { useContext, useEffect, useState, useRef } from "react";
import NavBar from "components/common/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import history from "utils/history";
import PrivateRoute from "components/routes/PrivateRoute";
import { StoreContext } from "state/store";
import { getUserCards } from "services";
import { useAuth0 } from "authentication/react-auth0-spa";
import styled from "styled-components";

// Routes
import Profile from "components/pages/Profile";
import Cards from "components/pages/Cards";
import EditCards from "components/pages/EditCards";
import AddCard from "components/pages/AddCard";
import EditCardPopup from "components/pages/EditCardPopup";
import Home from "components/pages/Home";
import screenSize from "styles/mediaQueries";

const Wrapper = styled.div`
  background: #332e67;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100vw;

  ${screenSize.minDesktop`
    height: 100vh;
  `}
`;

const App = () => {
  const { setCards } = useContext(StoreContext);
  const { user, getTokenSilently } = useAuth0();

  useEffect(() => {
    if (user) {
      (async () => {
        const fetchedCards = await getUserCards(user, getTokenSilently);
        setCards(fetchedCards);
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, getUserCards]);

  // Add Card Popup
  const [addCardPopup, setAddCardPopup] = useState(false);
  const [editCardPopup, setEditCardPopup] = useState(false);
  const [editCard, setEditCard] = useState({});
  const addCardWrapperRef = useRef();
  const editCardWrapperRef = useRef();

  const closePopups = (event, hardToggle) => {
    if (hardToggle || event.target === addCardWrapperRef.current) {
      setAddCardPopup(false);
    }
    if (hardToggle || event.target === editCardWrapperRef.current) {
      setEditCardPopup(false);
    }
  };

  const openAddCardPopup = () => {
    setAddCardPopup(true);
  };

  const handleSetEditCard = (card) => {
    console.log("editcard", editCard);
    setEditCard(card);
    setEditCardPopup(!addCardPopup);
  };

  return (
    <Router history={history}>
      <Wrapper>
        <header>
          <NavBar openAddCardPopup={openAddCardPopup} />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/cards" component={Cards} />
          <PrivateRoute
            path="/edit-cards"
            render={() => <EditCards handleSetEditCard={handleSetEditCard} />}
          />
          <PrivateRoute path="/add-cards" render={() => <AddCard />} />
          {/* <PrivateRoute path="/add-question" component={AddCard} /> */}
        </Switch>
        {addCardPopup && (
          <AddCard
            closePopups={closePopups}
            addCardWrapperRef={addCardWrapperRef}
          />
        )}
        {editCardPopup && (
          <EditCardPopup
            closePopups={closePopups}
            editCardWrapperRef={editCardWrapperRef}
            editCard={editCard}
          />
        )}
      </Wrapper>
    </Router>
  );
};

export default App;

// Reference
// https://medium.com/@pgivens/simplifying-global-state-with-react-hooks-4d7df52d363
// https://medium.com/@nazmifeeroz/how-to-use-react-usecontext-and-usestate-hooks-as-a-global-store-1b4f1898034f
