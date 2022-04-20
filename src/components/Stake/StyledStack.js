import styled from 'styled-components';

export const StyledStackMain=styled.div`
font-family: Manrope;
.balance-section{
font-family: Manrope;
background: rgba(19, 24, 35, 0.5);
border-radius: 10px;
padding:10px;

.balance{
font-size: 22px;
font-weight: 600;
line-height: 30px;
letter-spacing: 0em;

}
.amount{
font-size: 28px;
font-weight: 600;
line-height: 38px;
letter-spacing: 0em;

}
.analysis-section{
  

.inner-container{
overflow-x:auto;
background: #070D1B;
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
width:1015px;
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

.revenue-box2{
background: ${({ theme }) => theme.productCardBackground};;
padding: 16px 40px;
margin-bottom: 12px;
margin-bottom:10px;
.sub-head{
color:#FE8B1F;
}
.underline{
  color:#FE8B1F;

}
}

   

}    
}
`