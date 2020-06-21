import styled, { keyframes, css } from 'styled-components';
import { WidthWrapper as DefaultWidthWrapper } from 'components/ui/CommonStyling';

export const WidthWrapper = styled(DefaultWidthWrapper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: visible;
`;

export const Cards = styled.div`
    ${'' /* display: grid;
    grid-template-columns: 36% 64%;
    grid-template-rows: 3fr 2fr;
    height: 100%; */}
    background: #332E67;
    height: 100%;
    margin: 0 0 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* border-radius: 20px; */}
    ${'' /* padding: 70px 0; */}
`; 


export const QuestionBox = styled.div`
    padding: 40px;
    ${'' /* border: 40px solid #cac8ea */}
    font-size: 18px;

    width: 50%;
    border-radius: 20px 0 0 20px;
    background: #BBBADF;
    color: #302f31;
    font-weight: 500;
    font-size: 20px;

    box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08);
`; 



export const ConsoleBox = styled.div`
    background: #d6d4d4;
    padding: 40px;
    color: black;
    font-size: 18px;
`; 

export const CorrectAnswerBox = styled.div`
    padding: 40px;
    font-size: 18px;
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
    ${'' /* box-shadow: inset 0 0 50px #4a905c; */}
  }

  100% {
    background: none;
    box-shadow: none;
  }
`;

export const AnswerBox = styled.div`
    background: #1e1e1e;
     ${'' /* grid-row: 2; */}
    ${'' /* grid-column: 2; 
    grid-row: ${({incorrectAnswer}) => incorrectAnswer ? `1 / span 1` : `1 / span 2`}; */}
    padding: 0;
    position: relative;
    width: 50%;
    border-radius: 0 20px 20px 0;
    padding: 40px 40px 40px 0;
    background: #1e1e1e;
    /* padding: 40px 40px 40px 0; */
    ${'' /* border-top: 60px solid #1e1e1e;
    border-right: 40px solid #1e1e1e;
    border-bottom: 40px solid #1e1e1e; */}
    position: relative;
    width: 50%;
    overflow: auto;
    border-radius: 0 20px 20px 0;

    ${({correctAnswer}) => correctAnswer && correctAnswer === 'correct' && css`
        animation: ${flashGreen} 1s linear;
    `}

    ${({correctAnswer}) => correctAnswer && correctAnswer === 'incorrect' && css`
        animation: ${flashRed} 1s linear;
    `}

`; 

export const CorrectText = styled.div`
    color: white;
    font-size: 40px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: ${({correctAnswer}) => correctAnswer === false ? 'none' : 'block'};
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
    ${'' /* position: absolute;
    right: 40px;
    bottom: 40px; */}
    color: white;
    font-size: 16px;
    text-align: center;
    background: #4dab4d;
    padding: 15px 30px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    width: 170px;
    height: 100%;

    :hover {
        background: #4dab4d;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.06);
    }
`; 

export const CardsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  
  height: 120px;
  ${'' /* width: 80%; */}
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08);
`;

export const TopControlBar = styled.div`
  height: 60px;
  width: 100%;
  background: #413c7b;
  margin: 40px 0;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 10px;
  ${'' /* opacity: 0; */}
  box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08);
`

export const BottomBar = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 40px;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`

export const BottomControlBar = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 40px;
  background: #413c7b;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08);
`

export const Word = styled.span`
  color: ${({textColour}) => textColour && textColour}
`