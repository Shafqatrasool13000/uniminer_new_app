import styled from 'styled-components';

export const NavbarMainContainer = styled.div`
  font-family: Manrope;

font-style: normal;
background-color: transparent ;
.navbar{
  background:rgba(0, 0, 0, 0.3);
}
.logo-img{
  img{
    @media screen and (max-width:430px){
     height:24px;
    }
  }
}
.navbar-brand{
 margin-right:0; 
}
.register-btn{
 width:120px;
height:35px;
font-family: Manrope;
color:white;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
text-align: center;
border:none;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 4px;

@media screen and (max-width:480px){
  width:80px;
height:30px;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 10px;
}}


.navbar-light .navbar-toggler {
    color: #0047AB;
    border-color: #0047AB ;
    outline: none;
    background-color: white;
}

.navbar-light .navbar-nav .nav-link{
  font-family: Manrope;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

 color:#FFFFFF;  
}
.navbar-light .navbar-nav .nav-link:not(:first-child){
  margin-left:0;
  @media screen and (min-width:991px) {
  margin-left:2.7rem;

  
}


}
.navbar-collapse:first-child{
  
}


`