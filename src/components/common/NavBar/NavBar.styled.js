import styled from 'styled-components';
import { Link as ReactLink } from "react-router-dom";
import { WidthWrapper as DefaultWidthWrapper } from 'components/ui/CommonStyling'
import SettingsSVG from 'images/settings'

export const NavBar = styled.div`
    ${'' /* background: #081825; */}
    color: white;
    display: flex;
    height: 55px;
    ${'' /* height: 100px; */}
    z-index: 100;
    position: relative;
    margin-top: 70px;
`; 

export const NavItemsContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;


`; 

export const NavItems = styled.div`
    color: white;
    display: flex;
    align-items: center;

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`; 

export const Link = styled(ReactLink)`
    margin-right: ${({leftaligned}) => leftaligned ? 'auto' : 'unset'}
    color: white;
    text-decoration: none;
    padding: 15px 130px 15px 40px;
    text-align: left;
    font-size: 17px;
    ${'' /* overflow: none; */}
    ${'' /* background: #242052; */}
    display: none;
    ${'' /* :hover {
      background: #191640;
    } */}
`; 

export const HomeButton = styled(ReactLink)`
    margin-right: ${({leftaligned}) => leftaligned ? 'auto' : 'unset'}
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    font-size: 17px;
    color: #ccc;
    ${'' /* background: #4847a4; */}
    font-style: oblique;
    font-weight: 900;
    ${'' /* background: #242052; */}
    border-radius: 20px;
    

    :hover {
      background: #3f3b73;;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.06);
      color: white;
    }

`; 

export const Logo = styled.img`
  height: 20px;
  
  
`;

export const DropDownLink = styled.div`
  background: none;
    margin-right: ${({leftaligned}) => leftaligned ? 'auto' : 'unset'}
    color: white;
    text-decoration: none;
    padding: 0 50px;
    padding: 15px 40px;
    ${'' /* background: #242052; */}
    font-size: 17px;
    text-align: right;
    background: #332f67;

    :hover {
      ${'' /* background: #040e17; */}
      
    }
`; 



export const ButtonLink = styled('button')`
  color: white;
  text-decoration: none;
  text-align: left;
  padding: 15px 130px 15px 40px;
  background: none;
  font-size: 17px;
  line-height: unset;
  justify-self: right;
  cursor: pointer;
  display: none;
  width: 100%;

  :hover {
    ${'' /* background: #191640 !important; */}
    }

  :focus {
    outline: none;
  }
`

export const LoginButton = styled(ButtonLink)`
  display: block;

    ${'' /* color: white;
    text-decoration: none;
    padding: 0 50px;
    
    font-size: 17px; */}
    padding: 15px 40px;
    text-align: center;
    color: #ccc;
    background: #4847a4;
    ${'' /* font-style: oblique;
    font-weight: 900; */}
    ${'' /* background: #242052; */}
    border-radius: 20px;
    margin-left: auto;

    :hover {
      background: #4847a4;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.06);
      color: white;
    }



`;

export const SettingsIcon = styled(SettingsSVG)`
  height: 100%;
  svg g {
    fill: #5F5B85;
  }
`;

export const DropDownBox = styled.div`
  display: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  overflow: none;
  background: #242052;

  a {
    border-radius: 10px;
  }

  button {
    border-radius: 10px;
  }
`;

export const DropDownColumn = styled.div`
  display: flex;
  flex-direction: column;
  
  overflow: hidden;
  
  :hover {
    ${'' /* padding-bottom: 25px; */}
    
    
  }


  :hover ${DropDownBox} {
    ${'' /* background: #191640; */}
    display: block;
    
  }

  :hover ${ButtonLink} {
      display: block;
    }

  ${ButtonLink}:hover {
    background: #191640
  }

  :hover ${Link} {
      display: block;
  }

  ${Link}:hover {
    background: #191640
  }

  :hover ${SettingsIcon} {
    svg g {
      fill: white;
    }
  }
  
`; 

export const WidthWrapper = styled(DefaultWidthWrapper)``;

