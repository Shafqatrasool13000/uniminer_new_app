import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'

import { StyledPlanMain } from './StyledPlan'

const Plan = () => {

    return (
        <StyledPlanMain>
            
                    <div className="plan-section d-block d-sm-flex justify-content-between align-items-center">
                        <div  className="text-section">
                            <p className="title">You don’t have any plan</p>
                            <p className="sub-title">To connect the plan, go to the hosting category</p>
                        </div>
                        <button className="choose-plan-btn">
                        Choose the plan
                        </button>
                    </div>          
        </StyledPlanMain>
    )
}

export default Plan;