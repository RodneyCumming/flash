import React from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import * as Styled from "./Home.styled";
import FlashCardsImage from "images/flashcards.svg";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();

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
      </Styled.WidthWrapper>
    </Styled.Home>
  );
};

export default Home;
