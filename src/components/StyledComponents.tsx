
import styled from "styled-components";
import {Link } from "react-router-dom";
export  const Wrapper =styled.div`
width: 520px; 
height:auto;
margin: auto;
padding: 10px;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 5px;
overflow: hidden;

`;

export  const CustomHeaderWrapper= styled.div`
width:  520px;
height: 130px;
color:white;
padding: 10px;
display: flex; 
border-radius: 5px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: #d1c7c7;
& h3 {
    font-size: 24px;
    margin-bottom:20px ;
}
`;

export  const ContentWrapper =styled.div`
width: 500px; 
height:auto;
margin: auto;
padding: 10px;
margin-top: -20px;
display: flex;
flex-direction: column;
background-color: #f8f5f5;
border-radius: 5px;

`;
export  const CardWrapper=styled.div`
width: 100%;
display: flex;
justify-content: space-around;

& h3{
    width: 5%;
    color: gray;
    font-size: 20px; 
    margin-right: 10px;
}
`;

 
export const TaskCardWrapper= styled.div`
width: 100%;
padding: 5px;
padding-top: 10px;
padding-bottom: 10px;
margin-bottom: 10px;
border: 1px solid gray;
border-radius: 5px;
display: flex; 
justify-content: space-between;
align-items: flex-start;
background-color: #f7f7f7;
box-shadow: 0px 5px 5px #d1cbcb
`;
export const TaskTitle= styled(Link)`
width: 100%;
color:#0c0b0b;
font-size: 16px;
text-decoration:none ;
text-overflow: ellipsis;
`;