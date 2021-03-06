import styled from 'styled-components';

export const UniminerDashboardMain = styled.div`

.logo-section{
  margin-top:25px;
.logo-img{
border-radius: 50%;
width:61px;
}
.logo-text-img{
margin-left:16px;

}
}
.ant-layout-sider{
  margin-left:20px;
  border-radius: 10px;

}
.ant-layout-sider-children{
  margin-top:10px;
  padding-bottom:10px;
}

.ant-layout{
background:rgba(0, 0, 0, 0.3);
.ant-layout-content{
  margin-right:30px;
  min-height: 280;
  margin-top:-55px;
  margin-left:20px;
  @media screen and (max-width:480px) {
  margin: 0px 8px;
  padding: 0;
  margin-right:8px;
  }
 
 
  
}

.ant-layout-header{
background:transparent;
.anticon svg {
background-color: white;
color: black;
width: 22px;
height: 22px;
}
  }
}
.ant-layout-sider{
background: #070D1B;
font-family: Manrope;
min-width:240px !important;
.menu-items-section{
padding:0 16px;
}
.ant-menu-item{
margin-left: 32px;
}
.ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
background: rgba(19, 24, 35, 0.5);
border-radius: 10px;
margin-top:25px;
padding:16px 0;
overflow:hidden;

}
.menu-title{
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
color: #FFFFFF;
}
.profile-section{
.profile-inner{
margin-top:16px;
background: rgba(19, 24, 35, 0.5);
border-radius: 10px;
padding:20px 0;
.inner-div{

.setting-main{
width:100%;
.settings{
  cursor:pointer;
  position:relative;
  margin-left: 30px;
padding: 8px;
}
.settings-bg{

background: #070D1B;

}
.hightlight-settings{
margin-left: 30px;
padding: 8px;
}
.hightlight-settings::before{
content:'';
cursor:pointer;
width: 8px;
height: 37px;
background: #FE8B1F;
border-radius: 10px 0px 0px 10px;
position:absolute;
left: -4%;
top: 5%;

}
}
.profile-div{
  padding-right: 15px;
}

}
.profile-img{
margin-top:33px;
}
.name{
margin-top:8px;
}
.logout.btn{
margin-top:32px;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 4px;
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0.01em;
height: 45px;
width: 204px;
border-radius: 4px;
padding: 10px, 20px, 10px, 20px;
color:white;
border:none;
padding:0 10px;
}
}
}
}
#components-layout-demo-responsive .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

.site-layout .site-layout-background {
  background: #fff;
}

.site-layout .site-layout-background {
  background: ${({ theme }) => theme.contentInnerBackground};;
border-radius: 10px;
}
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected{
background: #070D1B;
position:relative;
}
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected::before{
  content:'';
  width: 8px;
   height: 40px;
  background: #FE8B1F;
border-radius: 10px 0px 0px 10px;
position:absolute;
left:0;
}
`