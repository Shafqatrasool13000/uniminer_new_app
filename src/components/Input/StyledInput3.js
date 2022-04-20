import styled from 'styled-components';

export const StyledInput3Main = styled.div`
margin-top: 16px;

.inner-container{
font-family: Manrope;
display:grid;
grid-template-columns: 25% 1fr;
align-items: center;
@media screen and (max-width:768px){
display:grid;
grid-template-columns: 15% 1fr;
.input-field{
    width:85% !important;   
}
}
.label{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0.01em;
}

.input-field{
margin-left: 25px;
width:90%;
font-family: Manrope;
position:relative;
 input{
border:1px solid rgba(20, 197, 251, 0.6);
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

.change{  
font-size: 10px;
font-weight: 600;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #FE8B1F;
position:absolute;
right: 5%;
top: 34%;
}

}
}

@media screen and (max-width:520px) {
.inner-container{
display:block;
.input-field{
margin-left: 0;
width:100% !important;    
margin-top:14px;
}
}

}

`