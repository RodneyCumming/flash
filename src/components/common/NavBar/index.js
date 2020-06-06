import React from "react";
import { useAuth0 } from "authentication/react-auth0-spa";

import * as Styled from './NavBar.styled';

const NavBar = props => {
  const { isAuthenticated, logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const {openAddCardPopup} = props;

  return (
    <Styled.NavBar>
    <Styled.NavItemsContainer>
      {isAuthenticated && (
          <>
          <Styled.Link leftaligned="true" to="/">HOME</Styled.Link>
          {/* <Styled.Link to="/profile">PROFILE</Styled.Link> */}
          <Styled.Link to="/edit-cards">EDIT CARDS</Styled.Link>
          {/* <Styled.Link to="/add-question">ADD CARD (old)</Styled.Link> */}
          <Styled.ButtonLink onClick={e => openAddCardPopup()}>ADD CARD</Styled.ButtonLink>
          </>
          )}
        {!isAuthenticated && (
          <Styled.ButtonLink onClick={() => loginWithRedirect({})}>LOGIN</Styled.ButtonLink>
          )}
          {isAuthenticated && (
            <Styled.ButtonLink onClick={() => logout()}>LOGOUT</Styled.ButtonLink>
          )}
        </Styled.NavItemsContainer>
    </Styled.NavBar>
  );
};

export default NavBar;