import React, { useState, useEffect, useContext } from "react";
import * as Styled from "./Cards.styled";
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";
import Editor from "./Editor";

const Cards = () => {
  const { cards } = useContext(StoreContext);
  // Fetching Cards State
  const [fetchedCards, setFetchedCards] = useState([]);
  // This could also be moved to global context state
  const { loading, user } = useAuth0();
  const [value, setValue] = useState("");

  // question/answer state
  const [activeCardNum, setActiveCardNum] = useState(0);
  const [input, setInput] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);

  useEffect(() => {
    setFetchedCards(cards);
  }, [cards]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const reset = () => {
    setActiveCardNum(0);
    setInput("");
  };

  const correct = () =>
    fetchedCards[activeCardNum].answer.toLowerCase().trim() ===
    input.toLowerCase().trim();

  const submit = () => {
    if (correct()) {
      setCorrectAnswer("correct");
      setIncorrectAnswer(false);
      if (fetchedCards[activeCardNum + 1]) {
        setActiveCardNum(activeCardNum + 1);
        setInput("");
      } else {
        // Todo: go to completed page
        // Show stats on cards completed
        reset();
      }
    } else {
      console.log("incorrect");
      setCorrectAnswer("incorrect");
      setIncorrectAnswer(true);
    }
  };

  return (
    <Styled.Cards className="App">
      <Styled.WidthWrapper>
        <Styled.TopControlBar></Styled.TopControlBar>
        <Styled.CardsContainer>
          <Styled.QuestionBox>
            {fetchedCards &&
              fetchedCards[activeCardNum] &&
              fetchedCards[activeCardNum].question
                .split(" ")
                .map((v) =>
                  v === "arr" ? <Styled.Word textColour={'#ca5959'}> {v}</Styled.Word> : <Styled.Word> {v}</Styled.Word>
                )}
          </Styled.QuestionBox>

          {/* Box Bottom Right */}

          <Styled.AnswerBox
            correctAnswer={correctAnswer}
            onAnimationEnd={() => setCorrectAnswer(false)}
            incorrectAnswer={incorrectAnswer}
          >
            {/* <Styled.Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /> */}
            <Editor value={input} setValue={setInput} />

            <Styled.CorrectText correctAnswer={correctAnswer}>
              {correctAnswer === "correct" ? "CORRECT" : "INCORRECT"}
            </Styled.CorrectText>
          </Styled.AnswerBox>
        </Styled.CardsContainer>

        {/* Box Bottom Left */}

        {/* <Styled.ConsoleBox>
          Console Box
      </Styled.ConsoleBox> */}

        {/* Box Top Right */}
        {incorrectAnswer && (
          <Styled.CorrectAnswerBox>
            {fetchedCards[activeCardNum].answer}
          </Styled.CorrectAnswerBox>
        )}

        <Styled.BottomBar>
          <Styled.BottomControlBar></Styled.BottomControlBar>
          <Styled.Submit onClick={() => submit(input)}>CTRL ↵</Styled.Submit>
        </Styled.BottomBar>
      </Styled.WidthWrapper>
    </Styled.Cards>
  );
};

export default Cards;
