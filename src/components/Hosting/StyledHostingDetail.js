import styled from 'styled-components';

export const HostingDetailMainContainer=styled.div`
font-family: Manrope;
padding:16px 10px ;

.first-section{
.heading{
font-size: 28px;
font-weight:600;
line-height:38px;
letter-spacing:0em;
color: ${({theme})=>theme.text};
margin:0;
}
@media screen and (max-width:480px) {
padding:10px;
}
}

.cloud-hosting-section{
background: ${({theme})=>theme.productCardBackground2};
border-radius: 10px;
.inner-container{
margin-top:16px;
padding-bottom: 16px;
.product{
font-family: Manrope;
background:${({theme})=>theme.productBackground2};
border:1px solid rgba(0, 0, 0, 0.3);
margin-top:16px;
border-radius:0 0 10px 10px;
.product-top{
background: ${({theme})=>theme.productBackground};
border-radius:0 0 10px 10px;
padding:16px 18px;
.name{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
border-bottom: 1px solid rgba(233, 233, 233, 0.2);
padding-bottom:11px;
}
.product-img{
margin-top:32px;
padding-bottom: 32px;
}
}

.product-bottom{
padding:0 29px;

.note{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
color: #6C86AC;
margin-top:16px;
}
.details{
margin-top:16px;
.title{
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
opacity:0.8;
}
.sub-title{
font-size: 12px;
font-weight: 600;
line-height: 14px;
letter-spacing: 0em;

}
.detail{
display:grid;
grid-template-columns: repeat(2,1fr);
}
}
}

}

.right-section{
font-family: Manrope;
padding:16px 0;
.title{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
}
.price-box{
background: ${({theme})=>theme.boxBackground};
border-radius: 10px;
padding:16px;
color:
${({theme})=>theme.text};;
.price-name{
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
}
.price{
font-size: 28px;
font-weight: 600;
line-height: 38px;
letter-spacing: 0em;
margin:0;
margin-left:65px;
}
}
.further-details{
font-family: Manrope;
margin-top:32px;

.title{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
opacity:0.8;
}
.sub-title{
font-family: Manrope;
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
@media screen and (max-width:480px) {
padding:0 10px;
}
}
.detail{
display:grid;
grid-template-columns: 1fr 2fr;
}
}
.quantity-box{
display:grid;
grid-template-columns: 1fr 2fr;
align-items: center;
.title{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
opacity:0.8; 
}
.quantity-btns{
    
}
}

.buy-now-section{
margin-top:28px;
.buy-now-btn{
height: 45px;
width: 246px;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 4px;
padding: 10px;
font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0.01em;
color: #FFFFFF;

}
}

}
}
}
.rig-info-section{
background: ${({theme})=>theme.productCardBackground2};
border-radius: 10px;
margin-top:32px;
padding:16px;
padding-top:22px;
font-family: Manrope;
.title-section{
.title{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
margin: 0;
}
}


.product{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;  
margin: 0;

}
.specification{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
margin: 0;
}

.underline{
opacity: 0.2;
border: 1px solid #FFFFFF;
}
.product-topics{
.topic{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
opacity:0.5;
}

}
.product-specifications{
.text{
font-family: Manrope;
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
@media screen and (max-width:480px) {
padding:0 10px;
}
}
}

}
.far-info-section{
background: ${({theme})=>theme.productCardBackground2};
border-radius: 10px;
margin-top:32px;
padding:16px;
padding-top:22px;
font-family: Manrope;
.title-section{
.title{
font-size: 18px;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
margin: 0;
}
}
.sub-title{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
margin: 0;

}

}

@media screen and (max-width:480px) {
padding:0;
}
`