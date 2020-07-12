import React, { useState, useContext } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { addCard, refreshUserCards } from "services";
import * as Styled from "./AddCard.styled";
import { StoreContext } from "state/store";
import Editor from "../Cards/Editor";

const AddCard = (props) => {
  const { loading, user, getTokenSilently } = useAuth0();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const { setCards } = useContext(StoreContext);

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const reset = () => {
    setQuestion("");
    setAnswer("");
     setCategory("");
  }

  const handleSubmit = async () => {
    console.log("handleSubmit");
    const newCard = {
      question: question,
      answer: answer,
      category: category,
      userId: user.sub,
      score: 0,
    };
    await addCard(getTokenSilently, newCard);
    refreshUserCards(user, getTokenSilently, setCards);
    reset();
  };

  if (loading || !user) {
    return <div>Loading...</div>;
  }

 

  return (

      <Styled.AddCard>
      <Styled.WidthWrapper>
        <Styled.Form>
          <Styled.TopControlBar>
            <Styled.CardType active={true}>CODE</Styled.CardType>
            <Styled.CardType>TEXT</Styled.CardType>
            <Styled.CardType>CLOZE</Styled.CardType>
          </Styled.TopControlBar>
          <Styled.CardsContainer>
          
            {/* <Styled.Label>Question</Styled.Label> */}
            <Styled.QuestionInput
              type="text"
              value={question}
              onChange={event => handleChange(event, setQuestion)}
              placeholder={'// Add Question Here: \n\n e.g. Remove duplicates from arr (set method)'}
            />
            {/* <Styled.Label>Answer</Styled.Label> */}
            <Styled.AnswerInput
              type="text"
              value={answer}
              onChange={event => handleChange(event, setAnswer)}
              placeholder={'// Add Answer Here: \n\n e.g. [...new Set(arr)])'}
            >
              <Editor value={answer} setValue={setAnswer} />
            </Styled.AnswerInput>
          
          </Styled.CardsContainer>
        </Styled.Form>

        <Styled.BottomBar>
          <Styled.BottomControlBar>
          <Styled.TextInput placeholder={'Category Name'} value={category} onChange={event => handleChange(event, setCategory)}/>
          </Styled.BottomControlBar>
          <Styled.AddButton onClick={() => handleSubmit()}>
          +
        </Styled.AddButton>

        </Styled.BottomBar>
        </Styled.WidthWrapper>
      </Styled.AddCard>
  );
};

export default AddCard;
