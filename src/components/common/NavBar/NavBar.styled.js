import styled from 'styled-components';
import { Link as ReactLink } from "react-router-dom";

export const NavBar = styled.div`
    background: #081825;
    color: white;
    display: flex;
`; 

export const NavItemsContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
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
    padding: 0 50px;
    padding: 15px 40px;
    background: none;
    font-size: 17px;

    :hover {
      background: #040e17;
    }
`; 

export const ButtonLink = styled('button')`
  color: white;
  text-decoration: none;
  padding: 0 50px;
  padding: 15px 40px;
  background: none;
  font-size: 17px;
  line-height: unset;
  justify-self: right;
  cursor: pointer;

  :hover {
      background: #040e17;
    }

  :focus {
    outline: none;
  }
`
