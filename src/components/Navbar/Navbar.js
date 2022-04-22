import React  from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavbarMainContainer } from './StyledNavbar';
import logo from '../../assets/logo.svg';
import logotxt from '../../assets/logo-txt.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbars = () => {
 const navigate = useNavigate();

     const moveToLogin = () => {
        navigate('/');
    }
    return (
        <NavbarMainContainer>
            <Container>
            <Navbar className='autohide ' expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Brand to="/" className='text-white'>
                    <div className="d-flex align-items-center">
                                <span className='logo-img'><img src={logo} alt="logo" /> </span>
                                <span className='logo-text-img ms-3'><img src={logotxt} alt="logo-text" /> </span>
                            </div>
                    </Navbar.Brand>
                    <Navbar.Brand  href="#" className=' d-lg-none '>
                    <button onClick={moveToLogin} className="register-btn bg-light">Logout</button>
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            
                            navbarScroll
                        >
                            <Link to="/" className='nav-link'>Overview</Link>
                            <Link to="/hosting" className='nav-link'>Hosting </Link>
                            <Link className='nav-link' to="/machines">Machines</Link>
                            <Link className='nav-link' to="/stake">Stake</Link>
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
                <div>
                </div>
            </Navbar>
            </Container>

        </NavbarMainContainer>
    )
}

export default Navbars