import styled from 'styled-components';

export const MachinesMainContainer = styled.div`
margin-top:-27px;
margin-bottom:64px;
@media screen and (max-width:480px) {
    margin-top:-100px;  
}

.machine-main{
padding-top: 33px;
@media screen and (max-width:480px) {
    padding-top: 10px;  
}
.card{
font-family: Manrope;
background: rgba(19, 24, 35, 0.3);
border-radius: 10px;
color: #FFFFFF;
text-align: center;
padding-bottom: 16px;
background: rgba(19, 24, 35, 0.5);
overflow: hidden;
position:relative;

.ribbon-1 {
  position: absolute;
  width:20%;
  top:0;
  background: #00897C;;
  transform-origin: 100% 0;
  transform: translate(-29.3%) rotate(-45deg);
  box-shadow: 0 0 0 999px #00897C;;
  clip-path: inset(0 -100%);
  font-size: 10px;
font-weight: 400;

}
.card-body{
padding:0;
}
.first-section{
font-family: Manrope;
border-radius: 10px;
background: rgba(19, 24, 35, 0.5);
padding:2px 18px 18px 16px;
.card-title{
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
margin-left:14px;
margin-top:24px;

border-bottom: 1px solid rgba(255, 255, 255, 0.205);
}

.miner-info{
font-size: 28px;
font-weight: 600;
line-height: 38px;
letter-spacing: 0em;
margin:0;
margin-top:16px;
}
.machine-img{
margin-top:8px;
}
.buy-now-btn{
height: 45px;
width: 246px;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 4px;
padding: 10px;
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0.01em;
color:white;
margin-top:32px;
@media screen and (max-width:991px){
width: 200px;
}
}

}
.second-section{
margin-top:16px;

.optimize{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
color: #6C86AC;
}
.details-section{
.detail-section{
font-size: 10px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
margin-top:0.8rem;
}
}
}
}
}
.download-more-section{
 margin-top:32px;
.download-btn{
height: 45px;
width: 246px;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 4px;
padding: 10px;
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0.01em;
color:white;
margin-top:32px;

}

}

`