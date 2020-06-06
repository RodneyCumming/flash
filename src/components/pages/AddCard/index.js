import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { addCard, refreshUserCards } from "services";
import * as Styled from "./AddCard.styled";
import { StoreContext } from "state/store";

const AddCard = (props) => {
  const { loading, user, getTokenSilently } = useAuth0();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { setCards } = useContext(StoreContext);
  const { closePopups, addCardWrapperRef } = props;

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("handleSubmit");
    const newCard = {
      question: question,
      answer: answer,
      userId: user.sub,
      score: 0,
    };
    await addCard(getTokenSilently, newCard);
    closePopups('',true);
    refreshUserCards(user, getTokenSilently, setCards);
  };

  if (loading || !user) {
    return <div>Loading...</div>;
  }

 

  return (
    <Styled.AddCardWrapper
      onClick={(e) => closePopups(e)}
      ref={addCardWrapperRef}
    >
      <Styled.AddCard>
        <Styled.Form>
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
          />
        </Styled.Form>
        <Styled.AddButton onClick={() => handleSubmit()}>
          ADD CARD
        </Styled.AddButton>
      </Styled.AddCard>
    </Styled.AddCardWrapper>
  );
};

export default AddCard;
