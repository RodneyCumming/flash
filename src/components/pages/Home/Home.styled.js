import styled from 'styled-components';
import { Link as ReactLink } from "react-router-dom";

export const Home = styled.div`
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 

export const Heading = styled.h1`
    color: white;
    font-size: 50px;
    text-align: center;
    font-weight: 600;
`; 

export const Link = styled(ReactLink)`
    color: white;
    font-size: 20px;
    text-align: center;
    background: #4f944f;
    padding: 15px 30px;
    border-radius: 10px;
    margin: 40px auto;
    cursor: pointer;
    font-weight: 500;

    :hover {
        background: #4dab4d;
    }
`; 

