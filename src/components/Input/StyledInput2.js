import styled from 'styled-components';

export const StyledInput2Main = styled.div`
margin-top: 16px;

.inner-container{
font-family: Manrope;
display:grid;
grid-template-columns: 15% 1fr;
align-items: center;
.label{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0.01em;
}

.input-field{
margin-left: 25px;
width:85%;

 input{
border:1px solid #14C5FB;
background-color:transparent;
font-family: Manrope;
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
height:45px;
outline:none;
color:${({theme})=>theme.text3};
}
}
}
@media screen and (max-width:480px) {
.inner-container{
display:block;
.input-field{
margin-left: 0;
width:100%;    
margin-top:8px;
}
}

}
`