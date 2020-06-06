import React, { useState, useEffect, useContext } from "react";
import * as Styled from "./Cards.styled";
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";

const Cards = () => {
  const { cards } = useContext(StoreContext);
  // Fetching Cards State
  const [fetchedCards, setFetchedCards] = useState([]);
  // This could also be moved to global context state
  const { loading, user } = useAuth0();

  // question/answer state
  const [drillActive, setDrillActive] = useState(true);
  const [activeCardNum, setActiveCardNum] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    setFetchedCards(cards);
  }, [cards]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const reset = () => {
    setActiveCardNum(0);
    setDrillActive(false);
    setInput("");
  };

  const correct = () =>
    fetchedCards[activeCardNum].answer === input;
  
     

  const submit = () => {
    if (correct()) {
      alert('correct');
      if (fetchedCards[activeCardNum + 1]) {
        setActiveCardNum(activeCardNum + 1);
        setInput("");
      } else {
        reset();
      }
    } else {
      alert(`incorrect ${fetchedCards[activeCardNum].answer}`);
    }
  };

  return (
    <Styled.Cards className="App">
      <Styled.QuestionBox>
        <p>{`${fetchedCards && fetchedCards[activeCardNum] && fetchedCards[activeCardNum].question}`}</p>
      </Styled.QuestionBox>
      
      <Styled.AnswerBox>
        <Styled.Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Styled.Submit onClick={() => submit(input)}>SUBMIT</Styled.Submit>
      </Styled.AnswerBox>
      <Styled.ConsoleBox>
        <button onClick={() => setDrillActive(!drillActive)}>
          Start/End Drill
        </button>
      </Styled.ConsoleBox>
    </Styled.Cards>
  );
};

export default Cards;
