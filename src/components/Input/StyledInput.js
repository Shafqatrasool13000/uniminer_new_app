import styled from 'styled-components';

export const InputMain=styled.div`

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

`