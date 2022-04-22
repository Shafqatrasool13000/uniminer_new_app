import styled from 'styled-components';

export const OverviewMainContainer=styled.div`
font-family: Manrope;
padding:16px 10px;
background:${({theme})=>theme.contentInnerBackground};
border-radius: 10px;
@media screen and (max-width:480px) {
border-radius: 10px;
padding:10px;
  
}
.first-section{
.heading{
font-size: 28px;
font-weight:600;
line-height:38px;
letter-spacing:0em;
color: ${({theme})=>theme.text};
}
}

.course-coin{
font-family: Manrope;
color: #FFFFFF;
overflow:hidden;
background:  ${({theme})=>theme.cardBackground2};
border-radius: 10px;
padding:10px;
.coin-main-container{
overflow-x:auto;
/* width */
::-webkit-scrollbar {
    height: 8px;

}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
.inner-section{
width:1000px;
margin:0 auto;
}
}
.title{
font-size: 22px;
font-weight: 600;
line-height: 30px;
letter-spacing: 0em;
color: #6C86AC;
}
.name{
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
margin: 0;
}
.currency{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
margin: 0;

}
.price{
font-size: 10px;
font-weight: 600;
line-height: 14px;
letter-spacing: 0em;
margin: 0;
}

.coin-box{
background: ${({ theme }) => theme.cardBackground};
padding: 16px 7px;
border-radius: 10px;
margin-bottom: 12px;
.price-section{
margin-left:21px;
.price-percent{
color:#FE8B1F;
}
}
}    
}
.daily-revenue{
font-family: Manrope;
color: #FFFFFF;
overflow:hidden;
border-radius: 10px;
padding:10px;
background:  ${({theme})=>theme.cardBackground2};
margin-top:32px;
.revenue-main-container{
overflow-x:auto;
/* width */
::-webkit-scrollbar {
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
.inner-section{
width:900px;
margin:0 auto;
}
}
.title{
font-size: 22px;
font-weight: 600;
line-height: 30px;
letter-spacing: 0em;
color: #6C86AC;
}
.head{
font-size: 16px;
font-weight: 700 ;
line-height: 22px;
letter-spacing: 0em;
margin: 0;
color:#FE8B1F ;
}
.sub-head{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
margin: 0;
color:${({theme})=>theme.text}

}
.underline{
color: #6C86AC;
}


.revenue-box{
background: ${({ theme }) => theme.productCardBackground};;
padding: 16px 40px;
margin-bottom: 12px;
margin-bottom:10px;
position:relative;

}
.revenue-box::after{
  content:"";
  background:rgba(255, 255, 255, 0.1);
  width:1px;
  height: 49px;
  position: absolute;
  right: 0;
}
.revenue-box2{
background: ${({ theme }) => theme.productCardBackground};;
padding: 16px 40px;
padding-bottom: 19px;
.sub-head{
color:#FE8B1F;
}
.underline{
  color:#FE8B1F;

}
}

   
}
.trending-cards{
font-family: Manrope;
color: #FFFFFF;
overflow:hidden;
border-radius:10px;
background:  ${({theme})=>theme.cardBackground2};
border-radius: 10px;
padding:16px;
margin-top:32px;
@media screen and (max-width:480px) {
padding:10px;
  
}
.title{
font-size: 22px;
font-weight: 600;
line-height: 30px;
letter-spacing: 0em;
color: #6C86AC;
}
.card{
background: ${({ theme }) => theme.contentInnerBackground};;
border-radius: 20px;
font-family: Manrope;
.card-body{
padding:8px;
}
.card-heading{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
margin:0;
margin-top:4px;
color:${({ theme }) => theme.text};
;
}
.card-subheading{
font-size: 12px;
font-weight: 600;
line-height: 16px;
letter-spacing: 0em;
margin:0;
margin-top:4px;
color:${({ theme }) => theme.text};
}
}
.progress{
  height:2px;
  background-color:rgba(233, 233, 233, 0.2);
  margin-top:32px;
  .progress-bar{
    background-color:#FE8B1F;
  }
}
}
`