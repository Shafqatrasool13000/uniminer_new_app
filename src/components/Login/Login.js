import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CgCloseO } from "react-icons/cg";
import { LoginMainContainer } from './StyledLogin';
import logo from '../../assets/logo.svg';
import logotxt from '../../assets/logo-txt.png';
import Input from '../Input/Input';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const moveToDashboard=()=>{
      navigate('/overview');
    }
    return (
        <LoginMainContainer>
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
                            <div className="login-section">
                                <label htmlFor="" className="label">Login</label>
                                <div className="mt-16">
                                    <Input type='email' placeholder='Email' />
                                </div>
                                <div className="mt-16">
                                    <Input type='password' placeholder='Password' />
                                </div>
                                <div className="d-flex     justify-content: stretch">
                                    <button className="login-btn w-100 " onClick={moveToDashboard}>
                                        Login
                                    </button>
                                </div>
                                <div className="register-text mt-16">
                                    <span>Don't have an account?</span>
                                    <Link to='register'>
                                    <span className='register'> Please register</span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </LoginMainContainer>
    )
}

export default Login