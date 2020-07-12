import React from "react";
import { useAuth0 } from "authentication/react-auth0-spa";
import * as Styled from "./Profile.styled";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.Profile>
      <Styled.ProfilePicture src={user.picture} alt="Profile" height={170}/>
      <Styled.UserName>{user.name}</Styled.UserName>
      <Styled.Email>{user.email}</Styled.Email>
    </Styled.Profile>
  );
};

export default Profile;