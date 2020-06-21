import React, { Fragment, useContext } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";
import * as Styled from './Home.styled';
import FlashCardsImage from 'images/flashcards.svg'

const Home = () => {

  const { loading, user } = useAuth0();
  const {cards} = useContext(StoreContext);
  const { isAuthenticated, logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  // if (loading || !user) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Styled.Home>
      <Styled.WidthWrapper>
        <Styled.LeftPanel>
        <Styled.Heading>DEV DRILL</Styled.Heading>
        
        {!isAuthenticated ? (
            <Styled.Link onClick={() => loginWithRedirect({})}>
                  LOGIN
                </Styled.Link>
          ) : (
            <Styled.Link to="/cards">START NOW</Styled.Link>
          )}
          
        </Styled.LeftPanel>
      <Styled.FlashCardsImage src={FlashCardsImage} />
      {/* <img src={FlashCardsImage} /> */}
      
      </Styled.WidthWrapper>
    </Styled.Home>
  );
};

export default Home;