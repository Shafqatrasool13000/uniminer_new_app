import React, { useContext } from 'react';
import { HostingDetailMainContainer } from './StyledHostingDetail';
import lightMode from '../../assets/lightMode.svg';
import darkMode from '../../assets/darkMode.svg';
import detailProduct from '../../assets/detailProduct.png';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import plusLight from '../../assets/plusLight.svg';
import minusLight from '../../assets/minusLight.svg';
import { ToggleModeContext } from '../../App';
import { Col, Container, Row } from 'react-bootstrap';

const HostingDetail = () => {
    const { themeToggler, theme } = useContext(ToggleModeContext);
    const details = [1, 2, 3, 4];
    const furtherDetails = [{ title: 'Estimated starting time', sub_title: 'Estimated 2021-10-12 (UTC/GMT+0)' }, { title: 'Location', sub_title: 'Canada' }, { title: 'Electricity fee', sub_title: '$0.065' }, { title: 'Management fee', sub_title: 'No management fee will be charged before cost is recovered. After recovering the cost, 30% of the net BTC output will be charged as the service management fee' },];
    const specifications=[
        'KD5',
        'SHA256',
        '89.00',
        '3250',
        '34.5',
    ];
    const productTopics=[
        'Mining rig Model',
        'Encryption Algorithm',
        'Rated Hashrate (TH/s)',
        'Power (W)',
        'Energy Ratio (at 25 Degrees Celsius Environment temperature, J/TH)',
    ];
    return (
        <HostingDetailMainContainer>
            <div className="first-section d-flex justify-content-between ">
                <h3 className='heading'>Details</h3>
                <span>
                    {
                        theme === 'light' ? (<img src={darkMode} onClick={themeToggler} alt="darkMode" />) : (<img src={lightMode} onClick={themeToggler} alt="lightMode" />)
                    }
                </span>
            </div>
            <div className="cloud-hosting-section">
                <div className="inner-container">
                    <Container fluid>
                        <Row>
                            <Col md={4}>
                                <div className="product">
                                    <div className="product-top">
                                        <p className="name">
                                            KD5
                                        </p>

                                        <div className="d-flex justify-content-center product-img">
                                            <img src={detailProduct} alt="detail-pic" />
                                        </div>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="note">Within the 6-month warranty, the repair cost will be paid by Antiminer</p>
                                        <div className="details">
                                            <Row>
                                                {details.map((title, index) => (
                                                    <Col lg={6}>
                                                        <div className="detail">
                                                            <p className="title">Hashrate</p>
                                                            <p className="sub-title">53TH/s</p>
                                                        </div>
                                                    </Col>
                                                ))}


                                            </Row>
                                        </div>
                                    </div>


                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="right-section">
                                    <p className="title">Cloud hosting - Start mining on Oct.15th</p>
                                    <div className="price-box d-flex align-items-center">
                                        <p className="price-title">Mining gir price</p>
                                        <p className="price">$8417</p>
                                    </div>
                                    <div className="further-details">
                                        {
                                            furtherDetails.map(({ title, sub_title }) => (
                                                <div className="detail ">

                                                    <p className="title">
                                                        {title}
                                                    </p>
                                                    <p className="subtitle">
                                                        {sub_title}
                                                    </p>
                                                </div>
                                            ))
                                        }

                                    </div>
                                    {
                                        theme === 'light' ? (
                                            <div className="quantity-box">
                                                <p className="title mt-1 ">Select quanity</p>
                                                <div className="quantity-btns d-flex align-items-center">
                                                    <span className="quantity-count">
                                                        <img src={minusLight} alt="minus" />
                                                    </span>
                                                    <p className="quantity ms-4 mt-3 text-dark">1</p>
                                                    <span className="quantity-count ms-4">
                                                        <img src={plusLight} alt="minus" />
                                                    </span>
                                                </div>
                                            </div>

                                        ) : (
                                            <div className="quantity-box">
                                                <p className="title mt-1">Select quanity</p>
                                                <div className="quantity-btns d-flex align-items-center">
                                                    <span className="quantity-count">
                                                        <img src={minus} alt="minus" />
                                                    </span>
                                                    <p className="quantity ms-4 mt-3 text-light">1</p>
                                                    <span className="quantity-count ms-4">
                                                        <img src={plus} alt="minus" />
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    }

                                    <div className="buy-now-section">
                                        <button className="buy-now-btn">
                                            Buy
                                        </button>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="rig-info-section">
                <Container fluid>


                    <Row className='align-items-center'>
                        <Col  sm={6} md={3}>
                            <div className="title-section">
                            <p className="title">Mining rig information</p>
                            </div>

                        </Col>
                        <Col sm={6} md={6}>

                            <p className="product">Service/Product</p>

                        </Col>
                        <Col sm={6} md={3}>

                            <p className="specification">Specifications</p>

                        </Col>
                    </Row>
                    <hr className="underline" />
                    <Row>
                        <Col sm={6} md={3}>
                          
                        </Col>
                        <Col sm={6} md={6}>
                            <div className="product-topics">
                                {
                                    productTopics.map((title,index)=>(
                                        <p key={index} className="topic">{title}</p>
                                    ))
                                }
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="product-specifications">
                                {
                                    specifications.map((title,index)=>(
<p key={index} className="text">{title}</p>
                                    ))
                                }
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="far-info-section">
            <Container fluid>


<Row className='align-items-center'>
    <Col  sm={6} md={4}>
        <div className="title-section">
        <p className="title">Mining farm information</p>
        </div>

    </Col>
    <Col sm={6} md={8}>

        <p className="sub-title">Mining farm introduction</p>

    </Col>
    
</Row>
<hr className="underline" />
<Row>
    <Col sm={6} md={4}>
      
    </Col>
    <Col sm={6} md={8}>
        
        <p  className="sub-title">Power Stability guaranteed quality</p>
      
    </Col>
   
</Row>
</Container> 
            </div>


        </HostingDetailMainContainer>
    )
}

export default HostingDetail