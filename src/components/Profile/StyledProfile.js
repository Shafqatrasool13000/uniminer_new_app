import styled from 'styled-components';

export const ProfileStyledMain= styled.div`
margin-top:32px;
margin-bottom:64px;
font-family: Manrope;
background: ${({theme})=>theme.contentInnerBackground};
.profile-section-main{
background: ${({theme})=>theme.cardBackground2};
margin-top:32px;
padding:10px;
border-radius: 16px;
.profile-pic-section{
font-family: Manrope;
.change{
font-size: 10px;
font-weight: 600;
line-height: 14px;
letter-spacing: 0em;
color: #FE8B1F;
margin-left:16px;
}
}

.profile-inputs{
margin-top:30px;    
}

.apply-btn-container{
.apply-btn{
height: 45px;
width: 246px;
border-radius: 4px;
padding: 10px;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
opacity: 0.5;
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0.01em;
margin-top:64px;
}
}
}

`