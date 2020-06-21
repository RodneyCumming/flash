import React, { useState } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import FlashLogo from "images/flash-logo.svg";

import * as Styled from "./NavBar.styled";

const NavBar = (props) => {
  const { isAuthenticated, logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { openAddCardPopup } = props;

  return (
    <Styled.NavBar>
      <Styled.WidthWrapper>
        <Styled.NavItemsContainer>
          {isAuthenticated && (
            <>
              <Styled.HomeButton leftaligned="true" to="/">
                <Styled.Logo src={FlashLogo} />
              </Styled.HomeButton>
              <Styled.DropDownColumn>
                <Styled.DropDownLink>
                  <Styled.SettingsIcon height="40px" width="40px" />
                </Styled.DropDownLink>

                <Styled.DropDownBox>
                  <Styled.Link to="/edit-cards">EDIT CARDS</Styled.Link>
                  <Styled.Link to="/add-cards">Add CARDS</Styled.Link>
                  <Styled.Link to="/cards">START</Styled.Link>
                  <Styled.ButtonLink onClick={() => logout()}>
                    LOGOUT
                  </Styled.ButtonLink>
                </Styled.DropDownBox>
              </Styled.DropDownColumn>
            </>
          )}
        </Styled.NavItemsContainer>
      </Styled.WidthWrapper>
    </Styled.NavBar>
  );
};

export default NavBar;
