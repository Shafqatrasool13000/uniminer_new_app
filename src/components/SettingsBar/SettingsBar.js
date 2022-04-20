import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { StyledSettingBarMain } from './StyledSettingsBar'

const SettingsBar = () => {
    const settings = ['User', 'Security', 'Notification', 'My plan']

    return (
        <StyledSettingBarMain>
            
                <div className="settings-main-container">
                    
                        <Row className='inner-section p-0'>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant="pills">
                                    {
                                        settings.map(((title, index) => (
                                            <Col className='col-lg p-0 '>
                                                <Nav.Item>
                                                    <Nav.Link eventKey={title}>{title}</Nav.Link>
                                                </Nav.Item>
                                            </Col>
                                        )))
                                    }
                                </Nav>
                            </Tab.Container>
                        </Row>
                  

                </div>

           
        </StyledSettingBarMain>
    )
}

export default SettingsBar