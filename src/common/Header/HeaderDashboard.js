import React from 'react'
import {Row , Col,Nav , Image , Navbar , Container, Form
,InputGroup, 
Button} from 'react-bootstrap';
import HrLogo from "../../assets/images/landing_logo.png"
import userPic from "../../assets/images/user.png"
import "./HeaderDashboard.css"
import { Search, Bell , Lock } from 'react-bootstrap-icons';
function HeaderDashboard() {
    let user = "Taqi Raza"
    return(
        <header className='header_dashboard mb-3'>
            <Container className='py-3'>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <Image src={HrLogo} alt='Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto align-items-center">
                                
                                <Nav.Item className='me-3'>
                                    <InputGroup>
                                        
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2 rounded-pill input-lg"
                                            aria-label="Search"
                                            style={{width:"400px"}}
                                        />
                                        <InputGroup.Text id="searchTop"><Search></Search></InputGroup.Text>
                                    </InputGroup>
                                </Nav.Item>
                                <Nav.Link href="#notification" className='me-3 top_dash_header_icon'><Bell></Bell></Nav.Link>
                                <Nav.Link href="#logout" className='me-3 top_dash_header_icon'><Lock></Lock></Nav.Link>
                                <Nav.Item className='ms-md-4'>
                                    <Button className='btn btn-success rounded-pill px-md-4'>Search</Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>   
                </Container>

               
        </header>
    )
}
export default HeaderDashboard;