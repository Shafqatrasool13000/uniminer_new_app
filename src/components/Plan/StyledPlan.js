import styled from 'styled-components';

export const StyledPlanMain=styled.div`
margin:32px 12px 64px 12px;
font-family: Manrope;
background: ${({theme})=>theme.cardBackground2};
padding:10px;

.plan-section{
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
.choose-plan-btn{
height: 45px;
width: 246px;
border-radius: 4px;
padding: 10px;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 4px;
font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0.01em;

  
}

}

`