import React, { Fragment } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";

const AddCard = () => {
  const { loading, user, getTokenSilently } = useAuth0();

  const addCard = async () => {
    const mockPayload = {
      "question": "test question", 
      "answer": "test answer",
      "userId": user.sub,
      "score": 0
    }

    try {
      const token = await getTokenSilently();

      const response = await fetch(`http://localhost:3001/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(mockPayload)
      });

      const responseData = await response.json();

      // console.log(responseData);

    } catch (error) {
      console.error(error);
    }
  }

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {/* <img src={user.picture} alt="Profile" /> */}

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
      <button onClick={() => addCard()}>Add Card</button>
    </Fragment>
  );
};

export default AddCard;