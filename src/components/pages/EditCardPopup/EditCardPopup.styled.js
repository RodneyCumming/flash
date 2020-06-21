import styled from "styled-components";
import { WidthWrapper as DefaultWidthWrapper } from "components/ui/CommonStyling";

export const WidthWrapper = styled(DefaultWidthWrapper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: visible;
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-bottom: 0;
`;

export const AddCard = styled.div`
    ${
      "" /* background: #0a1725;
    height: calc(100% - 200px);
    width: calc(100% - 200px);
    margin: 100px;
    ${'' /* display: grid;
    grid-template-columns: 36% 64%;
    grid-template-rows: 3fr 2fr; */
    }
    ${"" /* height: calc(100% - 200px);
    position: relative; */} */}
    height: 100%;
    ${"" /* margin-bottom: 70px; */}
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label``;

export const QuestionInput = styled.textarea`
  ${"" /* display: inline-block;
    flex: 50%;
    height: calc(100% - 0); 
    padding: 40px;
    font-size: 18px; */}
  border: none;
  resize: none;

  background: white;
  padding: 40px;
  font-size: 18px;
  color: #45494f;
  width: 50%;
  border-radius: 20px 0 0 20px;
  background: #bbbadf;

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }
`;
export const AnswerInput = styled.div`
  ${"" /* display: inline-block;
    flex: 50%;
    height: calc(100% - 0);  
    background: #152029;
    padding: 40px;
    font-size: 18px;
    color: white; */}

  color: white;
  padding: 0;
  position: relative;
  width: 50%;
  border-radius: 0 20px 20px 0;

  background: #1e1e1e;
  /* padding: 40px 40px 40px 0; */
  border-top: 40px solid #1e1e1e;
  border-right: 40px solid #1e1e1e;
  border-bottom: 40px solid #1e1e1e;
  position: relative;
  width: 50%;
  overflow: auto;
  border-radius: 0 20px 20px 0;

  ${"" /* border: none; */}
  resize: none;

  :focus {
    outline: none;
  }
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
  width: 170px;
  height: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08);

  :hover {
    background: #2578e4;
    box-shadow: 0;
  }
`;

export const TopControlBar = styled.div`
  ${"" /* height: 200px; */}
  width: 100%;
  margin-bottom: 40px;
  flex-grow: 0;
  flex-shrink: 0;
  ${"" /* border-radius: 10px; */}
  ${
    "" /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08); */
  }
  ${"" /* padding: 40px; */}
`;

export const CardType = styled.div`
  ${"" /* height: 200px; */}
  ${"" /* width: 100%; */}
  background: ${({ active }) => (active ? `#413c7b` : `#3c3873`)};
  ${"" /* margin-top: 40px;
  margin-bottom: 40px; */}
  ${"" /* flex-grow: 0;
  flex-shrink: 0; */}
  border-radius: 10px;
  box-shadow: ${({ active }) =>
    active &&
    `0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08)`};
  padding: 20px 70px;
  display: inline-block;
  margin-right: 20px;
  color: ${({ active }) => (active ? `white` : `#8b86bf`)};

  :hover {
     ${({ active }) =>
       active &&
       `
        ${"" /* background: #5d589a;
        cursor: pointer; */}
     `}
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  ${"" /* margin-top: 12%; */}
  height: 120px;
  ${"" /* width: 80%; */}
  box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08);
  border-radius: 20px;
`;

export const BottomBar = styled.div`
  ${"" /* height: 70px; */}

  width: 100%;
  margin-top: 40px;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`;

export const BottomControlBar = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 40px;
  ${"" /* padding: 30px; */}
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
  background: #413c7b;
  color: white;

  :focus::placeholder {
    color: transparent;
  }

  :hover {
    background: #514d8c;
  }

  :focus {
    outline: none;
  }
`;
