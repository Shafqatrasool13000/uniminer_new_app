import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CgCloseO } from "react-icons/cg";
import { RegisterMainContainer } from './StyledRegister';
import logo from '../../assets/logo.svg';
import logotxt from '../../assets/logo-txt.png';
import Input from '../Input/Input';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <RegisterMainContainer>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="left-section ">
                            <div className="logo-section d-flex align-items-center">
                                <span className='logo-img'><img src={logo} alt="logo" /> </span>
                                <span className='logo-text-img'><img src={logotxt} alt="logo-text" /> </span>
                            </div>
                            <div className="text-section">
                                <p className="heading">Uniminer</p>
                                <p className="sub-heading">
                                    made crypto mining simple
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='right-section-main'>
                        <div className="right-section">
                            <div className="close-icon">
                                <CgCloseO size='26px' className='close-icon' />
                            </div>
                            <div className="register-section">
                                <label htmlFor="" className="label">Register</label>

                                <div className="mt-16">
                                    <Input type='text' placeholder='First Name' />
                                </div>
                                <div className="mt-16">
                                    <Input type='text' placeholder='Last Name' />
                                </div>
                                <div className="mt-16">
                                    <Input type='email' placeholder='Email' />
                                </div>

                                <div className="mt-16">
                                    <Input type='password' placeholder='Password' />
                                </div>
                                <div className="mt-16">
                                    <Input type='password' placeholder='Confirm Password' />
                                </div>
                                <div className="d-flex     justify-content: stretch">
                                    <button className="register-btn w-100 ">
                                        Register
                                    </button>
                                </div>
                                <div className="login-text mt-16">
                                    <span>Already have an account?</span>
                                    <Link to='/'>
                                    <span className='login'> Please log in</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </RegisterMainContainer>
    )
}

export default Register