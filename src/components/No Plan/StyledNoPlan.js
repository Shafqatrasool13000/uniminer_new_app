import styled from 'styled-components';

export const StyledNoPlanMain=styled.div`
margin:32px 12px 64px 12px;
font-family: Manrope;
background: ${({theme})=>theme.cardBackground2};
padding:10px;

.inner-container{
font-family: Manrope;

.plan-section{

.plan{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
margin:0;
margin-top:4px;
}   

} 
.plan-name{
.name{
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
color: #FE8B1F;    
}
}
.plan-warranty{
 .name{
font-size: 10px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
   
 }   
}

.plan-analysis{
font-family: Manrope;
 .title{
font-size: 10px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0em;
 }
 .analysis-section{
     
 .title{
font-size: 10px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
opacity:0.8;

 }
 .subtitle-section{
.sub-title{
font-size: 10px;
font-weight: 600;
line-height: 14px;
letter-spacing: 0em;
text-align: left;

  }
  .img{
    vertical-align: text-top;   
  }   
 }    
 }   
}


.choose-plan-btn{
height: 45px;
width: 170px;
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