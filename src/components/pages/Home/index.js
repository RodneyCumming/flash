import React, { Fragment, useContext } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";
import * as Styled from './Home.styled';

const Home = () => {

  const { loading, user } = useAuth0();
  const {cards} = useContext(StoreContext);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.Home>
      <Styled.Heading>FLASH CARDS</Styled.Heading>
      <Styled.Link to="/cards">START NOW</Styled.Link>
    </Styled.Home>
  );
};

export default Home;