import React from 'react'
import { StyledToggleButtons } from './StyledToggleButton'

const ToggleButton = () => {
 
  return (
    <StyledToggleButtons>
        <div class="switch-button">
    <input class="switch-button-checkbox" type="checkbox"></input>
    <label class="switch-button-label" for=""><span class="switch-button-label-span">Disable</span></label>
  </div>

    </StyledToggleButtons>
  )
}

export default ToggleButton