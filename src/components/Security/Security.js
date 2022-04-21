import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlueButton from '../BlueButton/BlueButton'
import Input4 from '../Input/Input4'
import ToggleButton from '../ToggleButton/ToggleButton'
import { StyledSecurtiyMain } from './StyledSecurity'

const Security = () => {
    const rules = ['Minimum 8 character', 'At least one special character', 'At least one number', 'Can’t be the same as a previous']
    return (
        <StyledSecurtiyMain>
            <div className="two-factor-section d-block d-sm-flex justify-content-between align-items-center">
                <div className="text-section">
                    <p className="title">Two-factor authentication</p>
                    <p className="sub-title">To give your account even more protection, use 2-step authorization</p>
                </div>
                <div className="mt-3 mt-sm-0">
                    
                <ToggleButton />
                </div>

            </div>
            <div className="change-password-section">
                <p className="change-password-text">
                    Change password
                </p>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={8} >
                            <Input4 type='text' placeholder='Current Password' label='Current Password' />
                            <Input4 type='text' placeholder='New Password' label='New Password' />
                            <Input4 type='text' placeholder='Confirm Password' label='Confirm Password' />
                            <div className="save-btn-section d-flex justify-content-center">
                                <BlueButton title='Apply' />
                            </div>

                        </Col>
                        <Col md={4} className='px-3 mt-3 mt-md-0' >
                            <div className="rules-section">
                                <div className="first-section">
                                    <p >Rules for password</p>
                                    <p className="text">To create a new password, you have to  meet all of the following requirements </p>
                                </div>

                                <ul className="rules">
                                    {
                                        rules.map((title, index) => (
                                            <li key={index} className='rule'>{title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </StyledSecurtiyMain>
    )
}

export default Security