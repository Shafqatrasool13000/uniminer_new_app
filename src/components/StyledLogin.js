import styled from 'styled-components';

export const LoginMainContainer=styled.div`
height:100vh;
position:relative;

.left-section{
margin-top:19px;

.logo-section{
.logo-img{
background:transparent;
}
.logo-text-img{
margin-left:16px;
}
}

.text-section{
position:absolute;
top:50%;
color:var(--color-light);
transform: translateY(-50%);
font-family: Manrope;
color: #FFFFFF;
.heading{
font-size: 38px;
font-weight: 600;
line-height: 52px;
letter-spacing: 0em;
margin:0;
}
.sub-heading{
font-family: Manrope;
font-size: 24px;
font-weight: 400;
line-height: 33px;
letter-spacing: 0em;
}
}
}

/* Login Section */
.right-section{
background:rgba(0, 0, 0, 0.3);
border-radius: 10px;
margin-top:30px;
position:relative;
height:92vh;
padding:105px;

@media screen and (min-width:768px) and (max-width:991px) {
padding:13px;
.login-section{
width:93% !important;
}
}
.close-icon{
position:absolute;
right:10%;
top:5%;
}

.login-section{
position:absolute;
top:50%;
width:65%;
transform: translateY(-50%);
font-family: Manrope;

.mt-16{
margin-top:1.6rem;
}
.label{
font-size: 18px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
color: #FFFFFF;  
}

.login-btn{
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0.01em;
height: 45px;
left: 0px;
top: 179px;
border-radius: 4px;
padding: 10px;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
color: #FFFFFF;  
margin-top:32px;
}
.register-text{
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
color: #FFFFFF;  
.register{
color:var(--tertiary-color);
}
}
}
}
@media screen and (max-width:767px) {
height:100vh;
position:static;
height:0;

.left-section{
margin-top:10px;
.text-section {
margin-top: 80px;
position: static;
}
}

.right-section{
margin-top: 100px;
background:transparent;
border-radius: 0;
margin-top:0;
position:static;
height:0;
padding:0;
.close-icon{
display:none;
}
.login-section{
position: static;
-webkit-transform: translateY(0%);
-ms-transform: translateY(0%);
transform: translateY(0%);
width: 100%;
}
}
}
`