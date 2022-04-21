import React,{useContext} from 'react'
import { HostingMainContainer } from './StyledHosting';
import lightMode from '../../assets/lightMode.svg';
import darkMode from '../../assets/darkMode.svg';
import canadaFlag from '../../assets/canadaFlag.svg';
import hostingProduct from '../../assets/hostingProduct.png';
import { Col, Container, Row } from 'react-bootstrap';
import { ToggleModeContext } from '../../App';
import { useNavigate} from 'react-router-dom';
   


const Hosting = () => {
    const {themeToggler,theme}=useContext(ToggleModeContext);
    const navigate = useNavigate();
   

    const productDetails=[
        {
            title:'Location',sub_title:'Canada',icon:canadaFlag
        },
        {
            title:'Hashrate',sub_title:'104th'
        },
        {
            title:'Electricity fee',sub_title:'$0.075'
        },
        {
            title:'Online date',sub_title:'2022-02-06'
        },
        {
            title:'Power',sub_title:'3050 W'
        },
        {
            title:'Hosting fee',sub_title:'$130 per month'
        },
    ];
   const moveToDetails=()=>{
    navigate('/hosting-details');
   }
    const products=[1,2,3];
    return (
        <HostingMainContainer>
            <div className="first-section d-flex justify-content-between ">
                <h3 className='heading'>Hosting</h3>
                <span>
                    {
                        theme==='light'?( <img src={darkMode} onClick={themeToggler} alt="darkMode" />):( <img src={lightMode} onClick={themeToggler} alt="lightMode" />)
                    }
                   
                </span>
            </div>
            {
                products.map((data,index)=>(
                    <div className="hosting-product">
                    <Container fluid>
                    <div className="detail-section d-flex">
                        <Row className='align-items-center'>
                            <Col md={6} lg={3}>
                                <div className="product-img">
                                    <img src={hostingProduct} alt="product" />
                                </div>
                            </Col>
                            <Col md={6} lg={9}>
                                <div className="details">
                                    <p className="mini-title mt-2 mt-md-0">
                                        Antiminer S17 Plan
                                    </p>
                                    <p className="name">KD5</p>
                                    <div className="extra-details">
                                        <Row>
                                            {
                                                productDetails.map((data,index)=>(
                                                    <Col key={index} lg={4} className='mt-2 mt-lg-2'>
                                                    <div className="detail">
                                                        <p className="title">
                                                           {data.title}
                                                        </p>
                                                        <p className="sub-title">
                                                            {data.sub_title}
                                                            {data?.icon&&(
                                                         <span className='ms-2'><img src={data.icon} alt="flag" /></span> 
                                                            )}
    
                                                           
                                                        </p>
                                                    </div>
                                                </Col>
                                                ))
                                            }
                                          
                                        </Row>
                                    </div>
                                </div>
                                <div className="check-detail-btn">
                        <button onClick={moveToDetails} className="detail-btn">
                            Check details
                        </button>
                    </div>
                            </Col>
                        </Row>
                        
                    </div>
                    </Container>
                   
                </div>
                ))
            }
          

        </HostingMainContainer>
    )
}

export default Hosting