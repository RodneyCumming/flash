import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { updateCard, refreshUserCards } from "services";
import * as Styled from "./EditCardPopup.styled";
import { StoreContext } from "state/store";
import Editor from "../Cards/Editor";

const EditCardPopup = (props) => {
  const { loading, user, getTokenSilently } = useAuth0();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const { setCards } = useContext(StoreContext);
  const { editCard, setEditCard } = props;

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("handleSubmit");
    const updatedCard = {
      question: question,
      answer: answer,
      category: category,
      userId: user.sub,
      score: 0,
    };

    await updateCard(getTokenSilently, updatedCard, editCard._id);
    refreshUserCards(user, getTokenSilently, setCards);
    setEditCard(false)
  };

  useEffect(() => {
      setQuestion(editCard.question)
      setAnswer(editCard.answer)
      setCategory(editCard.category)
  }, [])

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
            <Styled.QuestionInput
              type="text"
              value={question}
              onChange={event => handleChange(event, setQuestion)}
              placeholder={'// Add Question Here: \n\n e.g. Remove duplicates from arr (set method)'}
            />
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

export default EditCardPopup;
