import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { MachinesMainContainer } from './StyledMachines';
import hotImg from '../assets/hot.svg';
import machineImg from '../assets/machineImg.png';
import HeadSection from '../components/HeadSection/HeadSection';


const Machines = () => {

    const machines = [1, 2, 3, 1, 2, 3, 1, 2, 3]

    return (
        <MachinesMainContainer>
            <Container>
            <HeadSection heading='Machines' />
            </Container>
            <Container>
                <Row className='justify-content-center'>
                    {
                        machines.map((title, index) => (
                            <Col sm={6} md={4} className='machine-main'>
                                <Card>
                                <p class="ribbon-1" >Accelerator Mode</p>
                                    <Card.Body>
                                        <div className="first-section">
                                            <Card.Title className='d-flex align-items-center justify-content-center'>
                                                Antiminer S17 Plan
                                                <span><img src={hotImg} alt="hot img" /></span>
                                            </Card.Title>
                                            <p className="miner-info">$6960.00</p>
                                            <img className='machine-img' src={machineImg} alt="antiminer" />
                                            <button className="buy-now-btn">
                                                Buy Now
                                            </button>

                                        </div>
                                        <div className="second-section">
                                            <p className="optimize">Global optimization is promising</p>
                                            <div className="details-section">
                                                {
                                                    [1, 2, 3].map((title, index) => (
                                                        <div className="d-flex detail-section justify-content-center">
                                                            <p>Hashrate</p>
                                                            <p className='ms-4'>53TH/s</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <div className="download-more-section d-flex justify-content-center">
                    <button className="download-btn">Download More</button>
                </div>
            </Container>
        </MachinesMainContainer>
    )
}

export default Machines;