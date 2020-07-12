import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import { WidthWrapper as DefaultWidthWrapper } from "components/ui/CommonStyling";
import screenSize from "styles/mediaQueries";

export const WidthWrapper = styled(DefaultWidthWrapper)`
  display: flex;
  height: 100%;
  overflow: visible;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 50px;
  margin-top: 10vh;

  ${screenSize.minDesktop`
    flex-direction: row;
    margin-top: unset;
  `}
`;

export const Home = styled.div`
  color: white;
  height: 100%;
`;

export const Heading = styled.h1`
  color: #d2d1e0;
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 40px;
  padding-top: 3vh;

  ${screenSize.minDesktop`
    font-size: 55px;
    padding-top: unset;
  `}
`;

export const Link = styled(ReactLink)`
  color: white;
  font-size: 16px;
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

  ${screenSize.minDesktop`
    font-size: 20px;
  `}
`;

export const FlashCardsImage = styled.img`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18), 0 10px 10px rgba(0, 0, 0, 0.14);
  height: 40vw;
  max-height: 40vh;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  ${screenSize.minDesktop`
    height: 50vh;
    margin-top: 0;
    margin-bottom: 0;
    flex-direction: row;
  `}
`;

export const LeftPanel = styled.div`
  text-align: center;
  
  ${screenSize.minDesktop`
    text-align: left;
  `}
`;
