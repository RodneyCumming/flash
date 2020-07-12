import styled, { keyframes, css } from "styled-components";
import { WidthWrapper as DefaultWidthWrapper } from "components/ui/CommonStyling";
import screenSize from "styles/mediaQueries";

export const WidthWrapper = styled(DefaultWidthWrapper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: visible;
`;

export const Cards = styled.div`
  background: #332e67;
  height: 100%;
  margin: 0 0 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionBox = styled.div`
  padding: 40px;
  background: #bbbadf;
  color: #302f31;
  font-weight: 500;
  font-size: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08);
  border: none;
  resize: none;
  width: 100%;
  border-radius: 20px 20px 0 0;
  min-height: 50%;

  ${screenSize.minDesktop`
    min-height: unset;
    width: 50%;
    border-radius: 20px 0 0 20px;
  `}
`;

export const ConsoleBox = styled.div`
  background: #d6d4d4;
  padding: 40px;
  color: black;
  font-size: 18px;
`;

export const CorrectAnswerBox = styled.div`
  font-size: 18px;
  padding: 40px;
  background: #262531;
  position: relative;
  width: 100%;
  border-radius: 20px 20px 0 0;
  min-height: 50%;

  ${screenSize.minDesktop`
    min-height: unset;
    width: 50%;
    border-radius: 20px 0 0 20px;
  `}
`;

const flashGreen = keyframes`
  0% {
    background: none;
    box-shadow: none;
  }

  50% {
    background: #4f944f;
    box-shadow: inset 0 0 50px #4a905c;
  }

  100% {
    background: none;
    box-shadow: none;
  }
`;

const flashRed = keyframes`
  0% {
    background: none;
    box-shadow: none;
  }

  50% {
    background: #a24242;
  }

  100% {
    background: none;
    box-shadow: none;
  }
`;

export const AnswerBox = styled.div`
  background: #1e1e1e;
  position: relative;
  padding: 40px 40px 40px 0;
  overflow: auto;
  width: 100%;
  border-radius: 0 0 20px 20px;
  min-height: 50%;
  resize: none;

  :focus {
    outline: none;
  }

  ${screenSize.minDesktop`
    min-height: unset;
    width: 50%;
    border-radius: 0 20px 20px 0;
  `}
`;

export const CorrectTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  display: ${({ correctAnswer }) =>
    correctAnswer === false ? "none" : "flex"};

  ${({ correctAnswer }) =>
    correctAnswer &&
    correctAnswer === "correct" &&
    css`
      animation: ${flashGreen} 1s linear;
    `}

  ${({ correctAnswer }) =>
    correctAnswer &&
    correctAnswer === "incorrect" &&
    css`
      animation: ${flashRed} 1s linear;
    `}
`;

export const CorrectText = styled.p`
  color: white;
  font-size: 40px;
  text-align: center;
`;

export const Input = styled.textarea`
  background: none;
  height: 100%;
  width: 100%;
  color: white;
  resize: none;
  border: none;
  font-size: 18px;

  :focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  text-align: center;
  border-radius: 10px;
  padding: 20px 70px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08);
  display: inline-block;
  cursor: pointer;
  color: white;
  font-size: 20px;
  background: #4dab4d;
  width: 100%;
  margin-right: 0;
  margin-top: 20px;
  margin-bottom: 50px;

  :hover {
    background: #48bf4d;
  }

  ${screenSize.minDesktop`
    width: unset;
    margin-top: unset;
    margin-bottom: unset;
  `}
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 120px;
  min-height: 400px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08);
  border-radius: 20px;

  ${screenSize.minDesktop`
    flex-direction: row;
    min-height: unset;
  `}
`;

export const TopControlBar = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: row-reverse;

  div:last-child {
    margin: 0;
  }

  ${screenSize.minDesktop`
    margin-top: 40px;
    margin-bottom: 40px;
  `}
`;

export const CardType = styled.div`
  background: ${({ active }) => (active ? `#413c7b` : `#3c3873`)};
  border-radius: 10px;
  box-shadow: ${({ active }) =>
    active &&
    `0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08)`};
  padding: 20px 70px;
  display: inline-block;
  margin-right: 20px;
  color: ${({ active }) => (active ? `white` : `#8b86bf`)};
`;

export const TopButton = styled(CardType)`
  background: ${({ active }) => (active ? `#413c7b` : `#3c3873`)};
  border-radius: 10px;
  box-shadow: ${({ active }) =>
    active &&
    `0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08)`};
  padding: 20px 70px;
  display: inline-block;
  position: relative;
  margin-left: 20px;
  margin-right: 0;
  font-size: 20px;
  color: ${({ active }) => (active ? `white` : `#8b86bf`)};
`;

export const ButtonLabel = styled.p`
  position: absolute;
  top: 0px;
  left: 0;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 10px;
  color: #9390c2;
`;

export const ControlButton = styled(CardType)`
  background: ${({ active }) => (active ? `#413c7b` : `#3c3873`)};
  border-radius: 10px;
  box-shadow: ${({ active }) =>
    active &&
    `0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08)`};
  padding: 20px 70px;
  display: inline-block;
  font-size: 20px;
  color: ${({ active }) => (active ? `white` : `#8b86bf`)};
  width: 100%;
  margin-right: 20px;
  margin-top: 20px;
  text-align: center;

  :hover {
    background: ${({ active }) => (active ? `#524d96` : `#3c3873`)};
    cursor: ${({ active }) => (active ? "pointer" : `unset`)};
  }

  ${screenSize.minDesktop`
    width: unset;
    margin-top: unset;
    text-align: left;
  `}
`;

export const BottomBar = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 0;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  border-radius: 20px;

  ${screenSize.minDesktop`
    margin-top: 40px;
  `}
`;

export const BottomControlBar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${screenSize.minDesktop`
    flex-direction: row;
  `}
`;

export const Word = styled.span`
  color: ${({ textColour }) => textColour && textColour};
`;
