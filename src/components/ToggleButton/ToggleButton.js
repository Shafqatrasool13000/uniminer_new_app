import React from 'react'
import { StyledToggleButtons } from './StyledToggleButton'

const ToggleButton = () => {
  return (
    <StyledToggleButtons>
<div className="toggle-buttons d-flex">
                <button className="enable sub-title">Enable</button>
                <button className="disable">Disable</button>
            </div>
    </StyledToggleButtons>
  )
}

export default ToggleButton