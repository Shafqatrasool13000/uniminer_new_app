import styled from 'styled-components';

export const StyledSecurtiyMain=styled.div`
margin-top:32px;
margin-bottom:64px;
font-family: Manrope;
background: ${({theme})=>theme.contentInnerBackground};
padding:10px;
.title{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
}
.sub-title{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0.01em;

}
.two-factor-section{   
.text-section{
font-family: Manrope;
}

}

.change-password-section{
font-family: Manrope;
margin-top:64px;
.save-btn-section{
    margin-top:64px;
}
.change-password-text{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;

}
}
.rules-section{
background: ${({theme})=>theme.cardBackground3};
border-radius: 10px; 
font-family: Manrope;
color: ${({theme})=>theme.text};;
.first-section{
padding:16px;
font-size: 14px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0.01em;   

} 
 
}

.rules{
padding-bottom:16px;

.rule{
    opacity: 0.5;
}
}


`