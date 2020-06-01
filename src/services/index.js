const apiUrl = `http://localhost:3001`

export const getUserCards = async (user, getTokenSilently) => {
  console.log('getUserCards - make sure this isnt called too much');
  try {
    const token = await getTokenSilently();
    const response = await fetch(`${apiUrl}/all-user-cards/${user.sub}`, {
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