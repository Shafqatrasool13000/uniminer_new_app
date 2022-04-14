import styled from 'styled-components';

export const UniminerDashboardMain=styled.div`

.logo-section{
.logo-img{
border-radius: 50%;
width:61px;
}
.logo-text-img{
margin-left:16px;
}
}

.ant-layout-sider{
background: #070D1B;
font-family: Manrope;
min-width:300px !important;
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
padding:0 16px;
.profile-inner{
margin-top:16px;
background: rgba(19, 24, 35, 0.5);
border-radius: 10px;
padding:32px 0;
.inner-div{
    padding-right:38px;
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
}
}
}
}

#components-layout-demo-custom-trigger .trigger {
padding: 0 24px;
font-size: 18px;
line-height: 64px;
cursor: pointer;
transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected{
background: #070D1B;
}
`