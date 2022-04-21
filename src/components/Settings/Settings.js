import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import SettingsBar from '../SettingsBar/SettingsBar'
import { StyledSettingsMain } from './StyledSettings'

const Settings = () => {
    return (
        <StyledSettingsMain>
            <HeadSection heading='Settings' />
            <SettingsBar />
        </StyledSettingsMain>
    )
}

export default Settings