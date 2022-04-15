import React from 'react'
import { OverviewMainContainer } from './StyledOverview';
import lightMode from '../../assets/lightMode.svg';
import { Card, Col, Row } from 'react-bootstrap';
import btc from '../../assets/btc.svg';
import { CgChevronDown } from "react-icons/cg";
import trend1 from '../../assets/trend1.png';
import trend2 from '../../assets/trend2.png';
import trend3 from '../../assets/trend3.png';
import trend4 from '../../assets/trend4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
const Overview = () => {
    const courseCoins = [1, 2, 3, 4, 5];
    const hashPower = [{ title: 'Hash rate', sub_title: 'mh/s' }, { title: 'Power', sub_title: 'W' }, { title: 'Daily cost', sub_title: '$ __' },];

    const cards = [{
       img:trend1,title: 'Mining news', sub_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', data: '01.01.2022', views: '129 views'
    }, {
        img:trend2,title: 'Mining news', sub_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', data: '01.01.2022', views: '129 views'
     },{
        img:trend3,title: 'Mining news', sub_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', data: '01.01.2022', views: '129 views'
     },{
        img:trend4,title: 'Mining news', sub_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', data: '01.01.2022', views: '129 views'
     },{
        img:trend1,title: 'Mining news', sub_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', data: '01.01.2022', views: '129 views'
     }, {
         img:trend2,title: 'Mining news', sub_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', data: '01.01.2022', views: '129 views'
      },{
         img:trend3,title: 'Mining news', sub_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', data: '01.01.2022', views: '129 views'
      },{
         img:trend4,title: 'Mining news', sub_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', data: '01.01.2022', views: '129 views'
      }]
    return (
        <OverviewMainContainer>
            <div className="first-section d-flex justify-content-between ">
                <h3 className='heading'>Overview</h3>
                <span>
                    <img src={lightMode} alt="lightMode" />
                </span>
            </div>
            <div className="course-coin">
                <p className="title">Cours coins</p>
                <div className="coin-main-container">
                    <Row className='inner-section'>
                        {
                            courseCoins.map((title, index) => (
                                <Col className='col-lg'>
                                    <div className="coin-box d-flex">
                                        <div className="pic-section ">
                                            <span>
                                                <img src={btc} alt="btc" />
                                            </span>
                                            <p className="name">
                                                BTC/BCH
                                            </p>
                                        </div>
                                        <div className="price-section">
                                            <p className="currency">USD 36,321</p>
                                            <div className="price-percent mt-1 d-flex">
                                                <CgChevronDown color='#FE8B1F' />
                                                <p className="price ">$1,2 (10%)</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </div>

            </div>
            <div className="daily-revenue">
                <p className="title">Daily revenue</p>
                <div className="revenue-main-container">
                    <Row className='inner-section'>
                        <Col className='col-lg p-0'>
                            <div className="revenue-box d-flex align-items-center">

                                <p className="sub-head">
                                    BTC/BCH
                                </p>
                                <span className='ms-2'>
                                    <img src={btc} alt="btc" />
                                </span>
                                <CgChevronDown className='ms-2' color='#14C5FB' />
                            </div>
                        </Col>
                        {
                            hashPower.map(((data, index) => (
                                <Col key={index} className='col-lg p-0 mx-1'>

                                    <div className={`${index !== 2 ? 'revenue-box d-flex align-items-center' : 'revenue-box d-flex align-items-center head '}`}>

                                        <p className="sub-head">
                                            {data?.title}
                                        </p>
                                        {
                                            !(index === 2) &&
                                            <p className="underline head ms-2">
                                                __
                                            </p>
                                        }

                                        <p className="sub-head ms-2">
                                            {data.sub_title}
                                        </p>



                                    </div>
                                </Col>
                            )))
                        }

                    </Row>
                </div>

            </div>
            <div className="trending-cards">
                <p className="title">Trending annoucmemnts and news</p>
                <div className="cards-swipper">
                    <Swiper
                        breakpoints={{
                            // when window width is >= 640px
                            300: {
                                width: 300,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            480: {
                                width: 480,
                                slidesPerView: 2,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 3,
                            },

                        }}
                        spaceBetween={10}
                        slidesPerView={5}
                        centeredSlides={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            cards.map(({img, title, subtitle, data, views }, index) => (
                                <SwiperSlide><Card >
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body>
                                        <div className="card-date d-flex justify-content-between">
                                            <p className="card-subheading">01.01.2022</p>
                                            <p className="card-subheading">
                                                129 views
                                            </p>
                                        </div>
                                        <Card.Title className='card-heading'>Mining news</Card.Title>
                                        <Card.Text className='card-subheading'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </Card.Text>
                                    </Card.Body>
                                </Card></SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
        </OverviewMainContainer>
    )
}

export default Overview