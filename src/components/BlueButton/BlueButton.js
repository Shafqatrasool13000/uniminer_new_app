import React from 'react'
import { StyledBlueBtnMain } from './StyledBlueButton'

const BlueButton = ({title}) => {
  return (
      <StyledBlueBtnMain>
    <button className='button'>{title}</button>
      </StyledBlueBtnMain>
  )
}

export default BlueButton