import React, { Fragment, useContext } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";

const Home = () => {

  const { loading, user } = useAuth0();
  const {cards} = useContext(StoreContext);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <h3>All Users Cards</h3>
      <button onClick={() => console.log(cards)}>Cards????</button>
      <code>{JSON.stringify(cards, null, 2)}</code>
    </Fragment>
  );
};

export default Home;