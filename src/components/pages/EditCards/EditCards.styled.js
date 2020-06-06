import styled from 'styled-components';

export const EditCards = styled.div`
    color: black;
    height: 100%;
    overflow: scroll;
    padding: 100px 20% 0;
`; 

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
`; 

export const Card = styled.div`
    border: 1px solid white;
    width: 80%;
    ${'' /* margin: 20px 50px; */}
    padding: 15px 30px;
    background: #f0f0f0;
    border-radius: 10px;
    position: relative;
`; 

export const EditIcon = styled.p`
    display: inline-block;
    padding: 7px;

    cursor: pointer;
    :hover {
        color: blue;
    }
`; 

export const CloseIcon = styled.p`
    display: inline-block;
    padding: 7px;
    cursor: pointer;
    :hover {
        color: red;
    }
`; 

export const IconContainer = styled.div`
    position: absolute;
    top: 5px;
    right: 10px;
`; 
