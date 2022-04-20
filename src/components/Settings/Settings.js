import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import NoPlan from '../No Plan/NoPlan'
import Notifications from '../Notifications/Notifications'
import Plan from '../Plan/Plan'
import Security from '../Security/Security'
import SettingsBar from '../SettingsBar/SettingsBar'
import { StyledSettingsMain } from './StyledSettings'

const Settings = () => {
    return (
        <StyledSettingsMain>
            <HeadSection heading='Settings' />
            <SettingsBar />
            <NoPlan/>
        </StyledSettingsMain>
    )
}

export default Settings