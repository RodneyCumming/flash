import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import FlashCardsSVG from "images/flashcards";
import { WidthWrapper as DefaultWidthWrapper } from "components/ui/CommonStyling";

export const WidthWrapper = styled(DefaultWidthWrapper)`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: visible;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 50px;
`;

export const Home = styled.div`
  color: white;
  height: 100%;
`;

export const Heading = styled.h1`
  color: #d2d1e0;
font-size: 55px;
text-align: center;
font-weight: 700;
margin-bottom: 40px;
`;

export const Link = styled(ReactLink)`
  color: white;
  font-size: 20px;
  text-align: center;
  background: #5eaf63;
  padding: 15px 30px;
  border-radius: 10px;
  margin: 40px auto;
  cursor: pointer;
  font-weight: 500;

  :hover {
    background: #4dab4d;
  }
`;

export const FlashCardsImage = styled.img`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18), 0 10px 10px rgba(0, 0, 0, 0.14);
  height: 50vh;
  border-radius: 20px;
`;

export const LeftPanel = styled.div`
    
`;
