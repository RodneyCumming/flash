import React from "react";
import * as Styled from "./Login.styled";
import { useAuth0 } from "authentication/react-auth0-spa";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Styled.Login>
      <button onClick={() => loginWithRedirect({})}>Log in</button>
    </Styled.Login>
  );
};

export default Login;