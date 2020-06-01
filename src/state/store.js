import React, {useState, createContext} from "react";

export const StoreContext = createContext(null);

// StoreProvider
export default ({ children }) => {
 const [profile, setProfileState] = useState({});
 const [cards, setCardsState] = useState({});
 

 const setProfile = profileObject =>
  setProfileState(profileObject)

 const setCards = cardsArray =>
  setCardsState(cardsArray)
 

 const store = {
   profile: profile,
   cards: cards,
   setProfile: setProfile,
   setCards: setCards,
 }
return (
  <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
)}
