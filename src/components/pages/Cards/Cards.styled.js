import styled from 'styled-components';

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 36% 64%;
    grid-template-rows: 3fr 2fr;
    height: 100%;
`; 


export const QuestionBox = styled.div`
    background: white;
    padding: 40px;
    font-size: 18px;
    color: #45494f;

`; 
export const ConsoleBox = styled.div`
    background: #f0f0f0;
    padding: 40px;
`; 
export const AnswerBox = styled.div`
    background: #152029;
    grid-row: 1/span 3;
    grid-column: 2;
    padding: 40px;
`; 

export const Input = styled.textarea`
    background: #152029;
    padding: 20px;
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
    position: absolute;
    right: 40px;
    bottom: 40px;
    color: white;
    font-size: 16px;
    text-align: center;
    background: #4f944f;
    padding: 15px 30px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;

    :hover {
        background: #4dab4d;
    }
`; 