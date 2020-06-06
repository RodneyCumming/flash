import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { updateCard, refreshUserCards } from "services";
import * as Styled from "./EditCardPopup.styled";
import { StoreContext } from "state/store";

const EditCardPopup = (props) => {
  const { loading, user, getTokenSilently } = useAuth0();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { setCards } = useContext(StoreContext);
  const { closePopups, editCardWrapperRef, editCard } = props;

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("handleSubmit");
    const updatedCard = {
      question: question,
      answer: answer,
      userId: user.sub,
      score: 0,
    };
    await updateCard(getTokenSilently, updatedCard, editCard._id);
    closePopups('',true);
    refreshUserCards(user, getTokenSilently, setCards);
  };

  useEffect(() => {
      setQuestion(editCard.question)
      setAnswer(editCard.answer)
  }, [])

  if (loading || !user) {
    return <div>Loading...</div>;
  }

 

  return (
    <Styled.AddCardWrapper
      onClick={(e) => closePopups(e)}
      ref={editCardWrapperRef}
    >
      <Styled.AddCard>
        <Styled.Form>
          {/* <Styled.Label>Question</Styled.Label> */}
          <Styled.QuestionInput
            type="text"
            value={question}
            onChange={event => handleChange(event, setQuestion)}
          />
          {/* <Styled.Label>Answer</Styled.Label> */}
          <Styled.AnswerInput
            type="text"
            value={answer}
            onChange={event => handleChange(event, setAnswer)}
          />
        </Styled.Form>
        <Styled.AddButton onClick={() => handleSubmit()}>
          UPDATE CARD
        </Styled.AddButton>
      </Styled.AddCard>
    </Styled.AddCardWrapper>
  );
};

export default EditCardPopup;
