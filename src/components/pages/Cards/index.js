import React, { useState, useEffect, useContext } from "react";
import * as Styled from "./Cards.styled";
// import { useHotkeys } from 'react-hotkeys-hook';
import { updateCard, refreshUserCards } from "services";
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";
import Editor from "./Editor";

const Cards = () => {
  const { cards } = useContext(StoreContext);
  // Fetching Cards State
  const [fetchedCards, setFetchedCards] = useState([]);
  // This could also be moved to global context state
  const { loading, user, getTokenSilently } = useAuth0();
  const { setCards } = useContext(StoreContext);

  const lowestScoredCard = (fetchedCards) =>
    fetchedCards.sort((a, b) => a.score - b.score)[0];
  const [activeCard, setActiveCard] = useState(lowestScoredCard(fetchedCards));
  const [input, setInput] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);

  useEffect(() => {
    setFetchedCards(cards);
  }, [cards]);

  useEffect(() => {
    setActiveCard(lowestScoredCard(fetchedCards));
  }, [fetchedCards]);

  const reset = () => {
    setActiveCard(lowestScoredCard(fetchedCards));
    setInput("");
  };

  const correctAnswerCheck = () =>
    activeCard.answer.toLowerCase().trim() ===
    input.toLowerCase().replace(";", "").trim();

  // Todo: refactor this so there is clearly no race condition between reset and updateCard
  const submit = async giveUp => {
    let cardScore = activeCard.score;
    if (correctAnswerCheck() && !giveUp) {
      setCorrectAnswer("correct");
      setIncorrectAnswer(false);
      cardScore += 1;
      reset();
    } else {
      !giveUp && setCorrectAnswer("incorrect");
      setIncorrectAnswer(true);
      cardScore -= 1;
    }

    const updatedCard = {
      question: activeCard.question,
      answer: activeCard.answer,
      category: activeCard.category,
      userId: user.sub,
      score: cardScore,
    };

    await updateCard(getTokenSilently, updatedCard, activeCard._id);
    refreshUserCards(user, getTokenSilently, setCards);
  };

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.Cards className="App">
      <Styled.WidthWrapper>
        <Styled.TopControlBar>
          <Styled.TopButton active={true}>
            <Styled.ButtonLabel>Score</Styled.ButtonLabel>
            <p>{activeCard ? activeCard.score : 0}</p>
          </Styled.TopButton>
        </Styled.TopControlBar>
        <Styled.CardsContainer>
        {!incorrectAnswer && (
          <Styled.QuestionBox>
            {fetchedCards &&
              activeCard &&
              activeCard.question
                .split(" ")
                .map((value, index) =>
                  value === "arr" ? (
                    <Styled.Word textColour={"#ca5959"} key={index}> {value}</Styled.Word>
                  ) : (
                    <Styled.Word key={index}>{value}</Styled.Word>
                  )
                )}
          </Styled.QuestionBox>
        )}

        {incorrectAnswer && (
          <Styled.CorrectAnswerBox>{activeCard.answer}</Styled.CorrectAnswerBox>
        )}

          <Styled.AnswerBox
            correctAnswer={correctAnswer}
            onAnimationEnd={() => setCorrectAnswer(false)}
            incorrectAnswer={incorrectAnswer}
          >
            <Editor value={input} setValue={setInput} />

            <Styled.CorrectTextContainer backgroundColour={correctAnswer === "correct" ? "blue" : "red"} correctAnswer={correctAnswer}>
              <Styled.CorrectText>{correctAnswer === "correct" ? "CORRECT" : "INCORRECT"}</Styled.CorrectText>
            </Styled.CorrectTextContainer>
          </Styled.AnswerBox>
        </Styled.CardsContainer>
        
        <Styled.BottomBar>
          <Styled.BottomControlBar>
            <Styled.ControlButton active={true} onClick={() => submit(true)}>
              GIVE UP
            </Styled.ControlButton>
            <Styled.ControlButton active={false} onClick={() => reset()}>
              SKIP
            </Styled.ControlButton>
            <Styled.Submit onClick={() => submit(false)}>SUMBIT</Styled.Submit>
          </Styled.BottomControlBar>
        </Styled.BottomBar>
      </Styled.WidthWrapper>
    </Styled.Cards>
  );
};

export default Cards;
