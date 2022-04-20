import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profilePic from '../../assets/profilePic.png';
import HeadSection from '../HeadSection/HeadSection';
import Input2 from '../Input/Input2';
import Input3 from '../Input/Input3';
import SettingsBar from '../SettingsBar/SettingsBar';
import { ProfileStyledMain } from './StyledProfile';

const Profile = () => {
    return (
        <ProfileStyledMain>
          
            <Container >
                <div className="profile-section-main">
                    <div className="profile-pic-section d-flex align-items-center">
                        <div className="img">
                            <img src={profilePic} alt="profile" />
                        </div>
                        <p className="change">Change photo</p>
                    </div>

                    <div className="profile-inputs">
                        <Row>
                            <Col md={6}>
                                <Input3 type='text' placeholder='First Name' label='First Name' value='Johnnie' />
                                <Input3 type='text' placeholder='Last Name' label='Last Name' value='Noxville' />
                                <Input3 type='phone' placeholder='Phone' label='First Name' value='+1 212-736-3100' />
                                <Input3 type='email' placeholder='Enter Email' label='Email' value='Johnnie_nx@mail.country' />
                            </Col>
                            <Col md={6}>
                                <Input2 type='text' placeholder='Country' label=' Country' value='' />

                                <Input2 type='text' placeholder='State' label='State' value='' />
                                <Input2 type='text' placeholder='City' label=' City' value='' />
                                <Input2 type='text' placeholder='Address' label=' Address' value='' />
                            </Col>
                        </Row>
                    </div>
                    <div className="apply-btn-container d-flex justify-content-center">
                        <button className="apply-btn">
                            Apply
                        </button>
                    </div>
                </div>
            </Container>
        </ProfileStyledMain>
    )
}

export default Profile