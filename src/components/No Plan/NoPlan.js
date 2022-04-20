import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { StyledNoPlanMain } from './StyledNoPlan';
import caution from '../../assets/caution.svg';

const NoPlan = () => {
    const warranty = ['360 Days', '50 TH/s', 'Estimated starting in 24 hrs'];
    const analysis=[
        {title:'Hashrate fee ',sub_title:'$0,0967/T/D',icon:caution},
        {title:'Electricity Fee',sub_title:'$0,0810/T/D',icon:caution},
        {title:'Static Output',sub_title:'$0,2479/T/D',icon:caution},
        {title:'Static Revenue Rate',sub_title:'32,21%',icon:caution},
    ]
    return (
        <StyledNoPlanMain>

            <div className="inner-container">
                <Container fluid>
                <Row className='justify-content-center'>
                    <Col sm={6} md={3} className='col-lg'>
                        <div className="plan-section">
                            <p className="plan">Your plan</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3} className='col-lg'>
                        <div className="plan-name">
                            <p className="name">Antiminer S17 Plan</p>
                        </div>

                    </Col>
                    <Col sm={6} md={3} className='col-lg'>
                        <div className="plan-warranty">
                            {
                                warranty.map((title, index) => (
                                    <p key={index} className="name">{title}</p>
                                ))
                            }

                        </div>

                    </Col>
                    <Col sm={6} md={3} className='col-lg'>
                        <div className="plan-analysis">
                            <p className="title">Comparative analysis</p>
                            {
                                analysis.map(({title,sub_title,icon})=>(
                                    <div className="analysis-section d-flex justify-content-between">
                                        <p className="title">{title}</p>
                                        <div className="subtitle-section d-flex align-items-center">
                                        <p className="sub-title">{sub_title}</p>
                                        <span  className='ms-2 '>
                                            <img className='img' src={icon} alt="caution" />
                                        </span>
                                        </div>
                                        
                                    </div>
                                ))
                            }
                        </div>

                    </Col>
                    <Col sm={6} md={3} className='col-lg'>
                        <div className="plan-btn">
                            <button className="choose-plan-btn">
                                Choose the plan
                            </button>
                        </div>

                    </Col>
                </Row>
                </Container>

            </div>
        </StyledNoPlanMain>
    )
}

export default NoPlan;