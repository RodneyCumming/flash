import styled from 'styled-components';
import { WidthWrapper as DefaultWidthWrapper } from 'components/ui/CommonStyling';
import Hexagons from 'images/hexagons.svg'
import screenSize from 'styles/mediaQueries'

export const WidthWrapper = styled(DefaultWidthWrapper)`
  display: flex;
  flex-direction: column;
  overflow: visible;
  height: 100%;
  position: relative;
`;

export const EditCards = styled.div`
    color: black;
    overflow: scroll;
    height: 100%;
    margin-bottom: 70px;
`; 

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;  
    grid-template-rows: max-content;
    grid-gap: 20px;
    ${'' /* padding: 50px; */}
    border-radius: 20px;
    margin-top: 60px;

    ${screenSize.minDesktop`
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  
    `}
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

export const CategoryTitle = styled.p`
    text-align: center;
    line-height: 50px;
    font-weight: 600;
    border-radius: 0 0 20px 20px;
    color: white;
    background: ${({colour}) => colour ? colour : 'grey'}
`; 

export const CardImage = styled.div`
    border-radius: 20px 20px 0 0;
    height: 80px; 
    background: ${({colour}) => colour ? `${colour}80` : 'grey'};
    background-image: url(${Hexagons});
    filter: brightness(2) contrast(1.1);

    ${screenSize.minDesktop`
        height: 120px; 
    `}
`; 

export const CardQuestion = styled.span`
   padding: 20px;
   background: #aaa8bf;
   text-align: left;
   flex-basis: 40%;
   display: inline-block;
`; 

export const CardAnswer = styled.span`
   padding: 20px;
   background: #423d79;
   color: white;
   text-align: left;
   flex-basis: 40%;
   display: inline-block;
`; 

export const CardScore = styled.span`
   padding: 20px;
   background: #2e2356;
   color: white;
   text-align: center;
   flex-basis: 20%;
   display: inline-block;
`; 


export const Card = styled.div`
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 1px;


    :hover {
        cursor: pointer;
        span {
            filter: brightness(1.1);
        }
    }

    div:first-child {
  
            padding: 100px;
        

    }
    

`; 

export const CategoryCard = styled.div`
    width: 100%;
    border-radius: 20px;
    position: relative;

    

    :hover {
        filter: brightness(1.1);
        box-shadow: 0 14px 28px rgba(0,0,0,0.13), 0 10px 10px rgba(0,0,0,0.09);
        cursor: pointer;
    }
`; 

export const BreadCrumbsContainer = styled.div`
    position: absolute;
`; 

export const BreadCrumb = styled.button`
    background: none;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 20px;
    display: inline-block;
    width: fit-content;
    color: #b3b0d3;
    border-radius: 20px;

    :hover {
        ${({clickable}) => clickable && `
        background: #3f3b73;
        box-shadow: 0 14px 28px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.06);
        color: white;
        cursor: pointer;
        `}
        
    }
`; 

export const CardWrapper = styled.div``;
