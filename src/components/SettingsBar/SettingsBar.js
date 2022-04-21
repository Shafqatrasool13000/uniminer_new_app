import React from 'react'
import { Col,Nav, Row, Tab } from 'react-bootstrap'
import { StyledSettingBarMain } from './StyledSettingsBar'
// import NoPlan from '../No Plan/NoPlan'
import Notifications from '../Notifications/Notifications'
import Plan from '../Plan/Plan'
import Security from '../Security/Security'
import Profile from '../Profile/Profile'
const SettingsBar = () => {
    const settings = ['User', 'Security', 'Notifications', 'My plan'];

    return (
        <StyledSettingBarMain>

            <div className="settings-main-container">
                
                <Tab.Container id="left-tabs-example" defaultActiveKey="User" >
                    <div className="setting-bar">
                    <Row className='inner-section p-0'>
                        <Nav variant="pills">
                            {
                                settings.map(((title, index) => (
                                    <Col key={index} className='col-lg p-0 '>
                                        <Nav.Item>
                                            <Nav.Link eventKey={title}>{title}</Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                )))
                            }
                        </Nav>
                    </Row>
                     </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="User">
                            <Profile />
                        </Tab.Pane>
                        <Tab.Pane eventKey="Security">
                            <Security />
                        </Tab.Pane>
                        <Tab.Pane eventKey="Notifications">
                            <Notifications />
                        </Tab.Pane>
                        <Tab.Pane eventKey="My plan">
                            <Plan />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>


        </StyledSettingBarMain>
    )
}

export default SettingsBar