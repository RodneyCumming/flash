// todo: Move this to .env
const apiUrl = `http://localhost:3001`

export const getUserCards = async (user, getTokenSilently) => {
  console.log('getUserCards - make sure this isnt called too much');

  try {
    const token = await getTokenSilently();
    const response = await fetch(`${apiUrl}/cards/user/${user.sub}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
  }
};

export const addCard = async (getTokenSilently, card) => {
  console.log('addCard', card);
  try {
    const token = await getTokenSilently();
    const response = await fetch(`${apiUrl}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(card)
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
  }
}

export const deleteCard = async (getTokenSilently, cardId) => {
  console.log('deleteCard', cardId);
  try {
    const token = await getTokenSilently();
    const response = await fetch(`${apiUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
  }
}

export const updateCard = async (getTokenSilently, updatedcard, cardId) => {
  console.log('update card', cardId);
  try {
    const token = await getTokenSilently();
    const response = await fetch(`${apiUrl}/cards/${cardId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updatedcard)
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
  }
}

export const refreshUserCards = async (user, getTokenSilently, setCards) => {
  const cards = await getUserCards(user, getTokenSilently);
  setCards(cards);
};