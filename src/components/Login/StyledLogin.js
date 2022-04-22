import styled from 'styled-components';

export const LoginMainContainer = styled.div`
height:94vh;
position:relative;

.left-section{
margin-top:19px;
margin-left:120px;

.logo-section{
.logo-img{
border-radius: 50%;
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
.right-section-main{
padding-left: 150px;
padding-right:30px;

.right-section{
background:${({ theme }) => theme.background};
border-radius: 10px;
margin-top:30px;
position:relative;
height:90vh;
padding-left:52px;
.close-icon{
color:${({ theme }) => theme.text}
}

.close-icon{
position:absolute;
right:10%;
top:5%;
}

.login-section{
position:absolute;
top:50%;
width:80%;
transform: translateY(-50%);
font-family: Manrope;

.mt-16{
margin-top:16px;
}
.label{
font-size: 18px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
color:${({ theme }) => theme.text};  
margin:0;
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
color: ${({ theme }) => theme.text};  
.register{
color:var(--tertiary-color);
}
}
}
}
}
@media screen and (min-width:768px) and (max-width:991px) {
padding:13px;
.left-section{
margin-left: 30px;
}
.right-section-main{
 padding-left:0;
 padding-right:0;

.right-section{
height: 84vh;
padding-left: 35px;

.login-section{
padding-left:0;
 width:80% !important;
 }
 }
}
}
@media screen and (max-width:767px) {
height:100vh;
position:static;
height:0;

.left-section{
margin-left: 10px;
.logo-section{
transform: translateX(0%);

}
.text-section {
margin-top: 80px;
position: static;
.heading{
font-size: 25px;
font-weight: 600;
line-height: 40px;
letter-spacing: 0em;
margin:0;
}
.sub-heading{
font-family: Manrope;
font-size: 18px;
font-weight: 400;
line-height: 33px;
letter-spacing: 0em;
}
}
}
.right-section-main{
padding: 10px;

.right-section{
margin-top: 100px;
border-radius: 0;
margin-top:0;
position:static;
height:0;
padding:0;

.close-icon{
display:none;
}
.login-section{
    padding: 10px;
position: static;
background:${({ theme }) => theme.background};
border-radius: 10px;
-webkit-transform: translateY(0%);
-ms-transform: translateY(0%);
transform: translateY(0%);
width: 100%;
}
}
}
}
`