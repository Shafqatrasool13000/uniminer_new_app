import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import { StyledNotificationsMain } from './StyledNotifications'

const Notifications = () => {

    const notifications = [
        { title: 'New post', sub_title: 'You will be notified when a new post is posted.' },
        { title: 'Email notification', sub_title: 'You will receive notifications by email' },
        { title: 'Phone notification', sub_title: 'You will receive notifications by phone' },
        { title: 'Balance changed', sub_title: 'You will receive notifications when the amount on your personal account changes' },
        { title: 'Cours coins changed', sub_title: 'You will receive notifications when the exchange rate of coins changes.' },
    ]
    return (
        <StyledNotificationsMain>
            {
                notifications.map(({ title, sub_title }, index) => (
                    <div className="notify-section d-block d-sm-flex justify-content-between align-items-center">
                        <div key={index} className="text-section">
                            <p className="title">{title}</p>
                            <p className="sub-title">{sub_title}</p>
                        </div>
                        <ToggleButton />
                    </div>
                ))
            }
        </StyledNotificationsMain>
    )
}

export default Notifications