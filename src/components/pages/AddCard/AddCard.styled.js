import styled from "styled-components";
import { WidthWrapper as DefaultWidthWrapper } from "components/ui/CommonStyling";
import screenSize from 'styles/mediaQueries'

export const WidthWrapper = styled(DefaultWidthWrapper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: visible;
`;

export const AddCard = styled.div`
    height: 100%;
    margin-bottom: 70px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label``;

export const QuestionInput = styled.textarea`
  border: none;
  resize: none;

  background: white;
  padding: 40px;
  font-size: 18px;
  color: #45494f;
  width: 100%;
  border-radius: 20px 20px 0 0;
  background: #bbbadf;
  min-height: 50%;

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }

  ${screenSize.minDesktop`
    min-height: unset;
    width: 50%;
    border-radius: 20px 0 0 20px;
  `}
`;

export const AnswerInput = styled.div`
  color: white;
  padding: 0;
  position: relative;
  background: #1e1e1e;
  border-top: 40px solid #1e1e1e;
  border-right: 40px solid #1e1e1e;
  border-bottom: 40px solid #1e1e1e;
  position: relative;
  width: 100%;
  overflow: auto;
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

export const AddButton = styled.button`
  color: white;
  font-size: 40px;
  text-align: center;
  background: #266cc7;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  height: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08);
  margin-top: 20px;

  :hover {
    background: #2578e4;
    box-shadow: 0;
  }

  ${screenSize.minDesktop`
    width: 170px;
    margin-top: 0;
  `}
`;

export const TopControlBar = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;

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
  padding: 20px 0;
  display: inline-block;
  margin-right: 20px;
  color: ${({ active }) => (active ? `white` : `#8b86bf`)};
  width: 100%;
  text-align: center;
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

export const BottomBar = styled.div`
  width: 100%;
  margin-top: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  ${screenSize.minDesktop`
      flex-direction: row;
      margin-top: 40px;
  `}
`;

export const BottomControlBar = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 40px;
  background: #413c7b;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08);
`;

export const TextInput = styled.input`
  border-radius: 10px;
  padding: 20px 30px;
  width: 100%;
  font-size: 17px;
  outline: none;
  border: none;
  height: 70px;
  background: #625d9a;
  color: white;

  :focus::placeholder {
    color: transparent;
  }

  :hover {
    background: #7570ad;
  }

  :focus {
    outline: none;
  }
`;
