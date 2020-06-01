import React, {useState, useEffect, useContext} from 'react';
import * as Styled from './Cards.styled';
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";

const Cards = () => {
  const {cards} = useContext(StoreContext);
  // Fetching Cards State
  const [fetchedCards, setFetchedCards] = useState([]);
  // This could also be moved to global context state
  const { loading, user } = useAuth0();

  // question/answer state
  const [drillActive, setDrillActive] = useState(false);
  const [activeCardNum, setActiveCardNum] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    setFetchedCards(cards);
    console.log('deckscards', cards);
  }, [cards]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const reset = () => {
    setActiveCardNum(0);
    setDrillActive(false);
    setInput('');
  }

  const submit = () => {
    if (fetchedCards[activeCardNum + 1]) {
      setActiveCardNum(activeCardNum + 1);
    } else {
      reset()
    }
  }
  return (
    <Styled.Cards className="App">
      <p>Flash App</p>
      {!!fetchedCards && <code>{JSON.stringify(fetchedCards, null, 2)}</code>}
      <p>{fetchedCards && fetchedCards.name}</p>
      <p>{`Number of questions: ${fetchedCards && fetchedCards.length}`}</p>
      <button onClick={() => setDrillActive(!drillActive)}>Start/End Drill</button>
      {drillActive && (
        <div>
          <p>Question:</p>
          <p>{`${fetchedCards && fetchedCards[activeCardNum].question}`}</p>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button onClick={() => submit(input)}>submit</button>
        </div>
      )}
   </Styled.Cards>
  );
};

export default Cards;


