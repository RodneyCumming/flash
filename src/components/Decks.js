import React, {useState, useEffect} from 'react';
import * as Styled from './Decks.styled';
import { useAuth0 } from "../react-auth0-spa";

const Decks = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently, loading, user } = useAuth0();
  const [userData, setUserData] = useState(undefined);
  const [userId, setUserId] = useState(1);
  const [drillActive, setDrillActive] = useState(false);
  const [activeCardNum, setActiveCardNum] = useState(0);
  const [input, setInput] = useState('');
  // const { loading, user } = useAuth0();

  // console.log(user);
 
  useEffect(() => {
    const callApi = async () => {
      console.log(user);
      try {
        const token = await getTokenSilently();
  
        const response = await fetch(`http://localhost:3001/api/userData?userId=${user.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        const responseData = await response.json();
  
        setShowResult(true);
        setApiMessage(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    if (user) {
      callApi();
    }
 
    
  }, [user]);

  console.log('user', user)

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const reset = () => {
    setActiveCardNum(0);
    setDrillActive(false);
    setInput('');
  }

  const submit = () => {
    if (apiMessage.cards[activeCardNum + 1]) {
      setActiveCardNum(activeCardNum + 1);
    } else {
      reset()
    }
  }

  const changeUser = () => {
    reset()
    setUserId( userId === 1 ? 2 : 1)
  }

  return (
    <Styled.Decks className="App">
      <p>Flash App</p>
      <h1>External API</h1>
      {/* <button onClick={callApi}>Ping API</button> */}
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
      <p>{apiMessage && apiMessage.name}</p>
      <p>{`Number of questions: ${apiMessage && apiMessage.cards && apiMessage.cards.length}`}</p>
      <button onClick={changeUser}>Change user</button>
      <button onClick={() => setDrillActive(!drillActive)}>Start/End Drill</button>
      {/* {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>} */}
      {drillActive && (
        <div>
          <p>Question:</p>
          <p>{`${apiMessage && apiMessage.cards && apiMessage.cards[activeCardNum].question}`}</p>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button onClick={() => submit(input)}>submit</button>
        </div>
      )}
   </Styled.Decks>
  );
};


export default Decks;
