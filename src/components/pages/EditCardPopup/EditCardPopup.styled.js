import styled from 'styled-components';

export const AddCardWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(10, 23, 37, .93);
    height: 100vh;
    width: 100vw;
`; 

export const AddCard = styled.div`
    background: #0a1725;
    height: calc(100% - 200px);
    width: calc(100% - 200px);
    margin: 100px;
    ${'' /* display: grid;
    grid-template-columns: 36% 64%;
    grid-template-rows: 3fr 2fr; */}
    height: calc(100% - 200px);
    position: relative;
`; 

export const Form = styled.form`
    width: 100%;
    display: flex;
    height: 100%;
`; 
export const Label = styled.label`
`; 
export const QuestionInput = styled.textarea`
    display: inline-block;
    flex: 50%;
    height: calc(100% - 0); 
    padding: 40px;
    font-size: 18px;
    border: none;
    resize: none;

    :focus {
        outline: none;
    }
`; 
export const AnswerInput = styled.textarea`
    display: inline-block;
    flex: 50%;
    height: calc(100% - 0);  
    background: #152029;
    padding: 40px;
    font-size: 18px;
    color: white;
    border: none;
    resize: none;

    :focus {
        outline: none;
    }
`; 

export const AddButton = styled.button`
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