import styled from 'styled-components';

export const StyledToggleButtons=styled.div`
.toggle-buttons{
position:relative;
width:200px;
.enable{
height: 32px;
width: 76px;
border-radius: 20px;
padding: 4px, 16px, 4px, 16px;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 20px;
position:absolute;
color:white;
}
.disable{
 background:transparent;
 color: white;
 height: 32px;
width: 140px;
border:1px solid #14C5FB;
border-radius: 25px;
padding-right: 10px;
text-align:end;
color:${({theme})=>theme.text};
}

}
`