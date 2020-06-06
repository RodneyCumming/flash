import React, { useContext } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";
import * as Styled from './EditCards.styled';
import { deleteCard, refreshUserCards } from "services";

const EditCards = props => {
  const { loading, user, getTokenSilently } = useAuth0();
  const { cards, setCards } = useContext(StoreContext);
  const { handleSetEditCard } = props;

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const handleDeleteCard = async cardId => {
    await deleteCard(getTokenSilently, cardId);
    refreshUserCards(user, getTokenSilently, setCards);
  }

  return (
    <Styled.EditCards>
      <Styled.CardsContainer>
        {cards && cards.map((card, index) => (
          <Styled.Card key={index}>
            <p>{card.question}</p>
            <p>{card.answer}</p>
            <Styled.IconContainer>
              <Styled.EditIcon onClick={() => handleSetEditCard(card)}>✎</Styled.EditIcon>
              <Styled.CloseIcon onClick={() => handleDeleteCard(card._id)}>X</Styled.CloseIcon>
            </Styled.IconContainer>
          </Styled.Card>
          ))}
      </Styled.CardsContainer>
    </Styled.EditCards>
  );
};

export default EditCards;