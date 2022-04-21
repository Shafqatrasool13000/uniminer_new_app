import React,{useContext} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlueButton from '../BlueButton/BlueButton'
import HeadSection from '../HeadSection/HeadSection'
import { StyledStackMain } from './StyledStack';
import stakeGraphLight from '../../assets/stakeGraphLight.png';
import { ToggleModeContext } from '../../App';
import stakeGraphDark from '../../assets/stakeGraphDark.png';

const Stake = () => {
    const {theme}=useContext(ToggleModeContext);
    const analysis = [
        { title: 'Interest Rate', amount: '4.5%' },
        { title: 'Today interest earned', amount: '$52.34' },
        { title: 'Total interest earned', amount: '$3,232/43' },
    ]
    return (
        <StyledStackMain>
            <HeadSection heading='Stake'/>
            <div className="balance-section">
                <p className="balance">Available balance</p>
                <p className="amount">$187,377.23</p>


                <div className="analysis-section">
                    <div className="inner-section">
                    <Container>
                        <Row className='p-0 align-items-center'>
                            {
                                analysis.map((({ title, amount }, index) => (
                                    <Col key={index} className='col-lg p-0'>
                                        <div className='analysis-box  '>
                                            <p className='title'>
                                                {title}
                                            </p>
                                            <p className={`${index === 0 ? 'sub-title text-yellow ms-2' : 'sub-title'}`}>
                                                {amount}
                                            </p>
                                        </div>
                                    </Col>
                                )))
                            }
                            <Col className='col-lg p-0'>
                                <div className='analysis-btn-section  '>
                                    <BlueButton title={'About Treasury'} />
                                </div>
                            </Col>
                        </Row>
                    
                        </Container>
                    </div>
                    

                </div>


            </div>
            <div className="graph-section">
                        {
                            theme==='light'?( <img src={stakeGraphLight} className='w-100' alt="graph" />):( <img className='w-100' src={stakeGraphDark} alt="graph" />)
                        }
                       
                    </div>
        </StyledStackMain>
    )
}

export default Stake