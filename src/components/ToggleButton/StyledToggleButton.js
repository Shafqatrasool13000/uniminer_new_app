import styled from 'styled-components';

export const StyledToggleButtons=styled.div`




.switch-button {
  background: transparent;
  border:1px solid #14C5FB;
  border-radius: 30px;
  overflow: hidden;
  width: 200px;
  font-family: Manrope;
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
color:${({theme})=>theme.text};
  position: relative;
  padding-right: 100px;
  position: relative;
  text-align:center;

  &:before {
    content: "Enable";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  &-checkbox {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + .switch-button-label:before {
      transform: translateX(100px);
      transition: transform 300ms linear;
    }

    & + .switch-button-label {
      position: relative;
      padding: 8px 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: "";
       background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 300ms;
      }

      .switch-button-label-span {
        position: relative;
      }
    }
  }
}




/* transition: all .3s ease-in-out;
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

} */
`