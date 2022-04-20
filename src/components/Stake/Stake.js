import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeadSection from '../HeadSection/HeadSection'
import { StyledStackMain } from './StyledStack'

const Stake = () => {
    const analysis = [
        { title: 'Interest Rate', amount: '4.5%' },
        { title: 'Today interest earned', amount: '$52.34' },
        { title: 'Total interest earned', amount: '$3,232/43' },
    ]
    return (
        <StyledStackMain>
            <HeadSection />
            <div className="balance-section">
                <p className="balance">Available balance</p>
                <p className="amount">$187,377.23</p>
                <div className="anaylsis-section">

                    <div className="inner-container">
                        <Container>
                            <Row className='inner-section p-0'>

                                {
                                    analysis.map((({ title, amount }, index) => (
                                        <Col key={index} className='col-lg p-0 '>

                                            <div className={`${index !== 2 ? 'revenue-box d-flex align-items-center' : 'revenue-box2 d-flex align-items-center head '}`}>

                                                <p className="sub-head">
                                                    {title}
                                                </p>
                                                {
                                                    !(index === 2) &&
                                                    <p className="underline head ms-2">
                                                        __
                                                    </p>
                                                }

                                                <p className="sub-head ms-2">
                                                    {amount}
                                                </p>

                                            </div>
                                        </Col>
                                    )))
                                }

                            </Row>
                        </Container>

                    </div>

                </div>
            </div>
        </StyledStackMain>
    )
}

export default Stake