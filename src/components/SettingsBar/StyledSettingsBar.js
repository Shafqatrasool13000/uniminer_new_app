import styled from 'styled-components';

export const StyledSettingBarMain=styled.div`

.settings-main-container{

border-radius: 25px;


.nav-item{
  text-align: center;
}
.nav-pills .nav-link {
color:${({theme})=>theme.text};
transition: none;

}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link{
border-radius:25px;
color:white;
text-align:center;
}
.setting-bar{
  overflow-x:auto;
  padding-bottom: 8px;
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
width:1000px;
margin:0 auto;
background: ${({theme})=>theme.navBackground};
border-radius: 25px;
border:1px solid ${({theme})=>theme.toggleBorder2};
}
}

.sub-head{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
margin: 0;
color:${({theme})=>theme.text}
}

.revenue-box{
background: ${({ theme }) => theme.productCardBackground};;
padding: 16px 40px;
margin-bottom: 12px;
margin-bottom:10px;
position:relative;
font-family: Manrope;
}

`