import React, { useContext, useState } from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import { StoreContext } from "state/store";
import * as Styled from "./EditCards.styled";
import EditCardPopup from "components/pages/EditCardPopup";

const EditCards = () => {
  const { loading, user } = useAuth0();
  const { cards } = useContext(StoreContext);
  const [activeCategory, setActiveCategory] = useState(false);

  const [editCard, setEditCard] = useState(false);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const clearEditState = () => {
    setActiveCategory(false);
    setEditCard(false);
  };

  // Generate card colour based on first character
  const convertNameToColour = (name) => {
    const colours = ["#38509a", "#6d518a"];
    const firstLetterNumber = Math.floor(
      (name.toLowerCase().charCodeAt(0) - 96) / (26 / colours.length)
    );

    return colours[firstLetterNumber] || "#38799a";
  };

  const categories = cards
    .map((v, i) => v.category)
    .filter((v, i, a) => a.indexOf(v) === i);

  return (
    <Styled.EditCards>
      <Styled.WidthWrapper>
        {activeCategory && (
          <Styled.BreadCrumbsContainer>
            <Styled.BreadCrumb
              onClick={() => clearEditState()}
              clickable={true}
            >
              ◀ Edit
            </Styled.BreadCrumb>
            {activeCategory && (
              <Styled.BreadCrumb
                onClick={() => setEditCard(false)}
                clickable={!!editCard}
              >
                ◀ {activeCategory}
              </Styled.BreadCrumb>
            )}
          </Styled.BreadCrumbsContainer>
        )}

        <Styled.CardsContainer onClick={console.log(categories)}>
          {!activeCategory &&
            categories &&
            categories.map((category, index) => (
              <Styled.CategoryCard
                key={index}
                onClick={() => setActiveCategory(category)}
              >
                <Styled.CardImage colour={convertNameToColour(category)} />
                <Styled.CategoryTitle colour={convertNameToColour(category)}>
                  {category.toUpperCase()}
                </Styled.CategoryTitle>
                <Styled.IconContainer></Styled.IconContainer>
              </Styled.CategoryCard>
            ))}
        </Styled.CardsContainer>

        {activeCategory && cards && !editCard && (
          <Styled.CardWrapper>
            {" "}
            {cards
              .filter((card) => card.category === activeCategory)
              .map((card, index) => (
                <Styled.Card key={index} onClick={() => setEditCard(card)}>
                  <Styled.CardQuestion>{card.question}</Styled.CardQuestion>
                  <Styled.CardAnswer>{card.answer}</Styled.CardAnswer>
                  <Styled.CardScore>{card.score}</Styled.CardScore>
                </Styled.Card>
              ))}
          </Styled.CardWrapper>
        )}
        {editCard && (
          <EditCardPopup editCard={editCard} setEditCard={setEditCard} />
        )}
      </Styled.WidthWrapper>
    </Styled.EditCards>
  );
};

export default EditCards;
