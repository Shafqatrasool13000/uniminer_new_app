import styled from 'styled-components';

export const StyledNotificationsMain=styled.div`
margin-top:32px;
margin-bottom:64px;
font-family: Manrope;
background: ${({theme})=>theme.contentInnerBackground};
padding:10px;
.notify-section{
font-family: Manrope;
.text-section{
    margin-top: 16px;
.title{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
margin:0;
margin-top:4px;

}   
.sub-title{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0.01em;
opacity: 0.8;

}
}   
}
`