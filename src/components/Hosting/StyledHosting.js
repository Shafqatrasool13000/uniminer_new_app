import styled from 'styled-components';

export const HostingMainContainer=styled.div`
font-family: Manrope;
padding:16px;
background: ${({theme})=>theme.cardBackground2};
border-radius: 10px;
.first-section{
    @media screen and (max-width:480px) {
        padding:10px;
    }
.heading{
font-size: 28px;
font-weight:600;
line-height:38px;
letter-spacing:0em;
color: ${({theme})=>theme.text};
margin:0;
}
}

.hosting-product{
background:${({theme})=>theme.productCardBackground2};
padding:16px;
padding-right:0;   
margin-top:32px;
border-radius: 10px;

.detail-section{
color: ${({theme})=>theme.text};;
.details{
.minit-title{
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
}
.name{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em; 
}

.extra-details{
.detail{
    display:grid;
    grid-template-columns: 40% 60%;
.title{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
opacity: 0.5;
margin:0;
}
.sub-title{
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
margin:0;

}
}
}

}  

.check-detail-btn{
margin-top:32px;
.detail-btn{
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 4px;
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0.01em;
height: 45px;
width: 246px;
padding: 10px;
color:white;
} 
}
}

}

@media screen and (max-width:480px) {
    padding:0 ;
}
`