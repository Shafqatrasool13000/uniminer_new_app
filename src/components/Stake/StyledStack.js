import styled from 'styled-components';

export const StyledStackMain = styled.div`
font-family: Manrope;
padding:0 16px;
.graph-section{
  margin-top:48px;
}
.balance-section{
font-family: Manrope;
background: ${({ theme }) => theme.cardBackground2};
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
overflow-x:auto;
background: ${({ theme }) => theme.productCardBackground};
border-radius: 10px;

.inner-section{
width:900px;
padding: 10px;

.analysis-box{

margin-bottom: 12px;
margin-bottom:10px;
position:relative;
font-family: Manrope;
.title{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
margin:0;
color: #6C86AC;
}
.text-yellow{
  color: #FE8B1F;
}
.sub-title{
font-size: 18px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;

margin:0;

margin-top:8px;


}
}

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
}
   
}
`