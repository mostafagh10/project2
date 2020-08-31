import styled from 'styled-components';

export const Bighome = styled.div`
width:100%;
height:700px;
position: relative;
`

export const Homeover = styled.div`
background-image:url('home1.jpg');
background-size:cover;
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
`

export const Hometext = styled.div`
background-color:rgb(58, 57, 57);
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
opacity : 0.8;
`

export const Homeposition = styled.div`
margin-top: 210px;
float : right;
`

export const Homeh1 = styled.h1`
color: white;
font-weight: bold;
`

export const Homespan = styled.span`
color : rgb(182, 17, 17);
`

export const Homebutton = styled.button`
background:none;
width: 250px;
height: 60px;
color : white;
font-size : 20px;
transition:all 0.5s ease-in-out;
border:2px solid rgb(182, 17, 17);
font-weight:bold;
&:hover { color : rgb(182, 17, 17); border-color:white;};
`
