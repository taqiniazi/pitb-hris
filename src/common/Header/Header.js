import React from 'react'
import {Row , Col,Nav , Image , Navbar , Container, NavDropdown } from 'react-bootstrap';
import HrLogo from "../../assets/images/pitb_hr_logo.png"
import userPic from "../../assets/images/user.png"
import "./Header.css"
import { Bell } from 'react-bootstrap-icons';
function Header() {
    let user = "Taqi Raza"
    return(
        <header className='header mb-3 bg-primary text-white'>
            <Container className='py-1'>
                <Navbar expand="md">
                    <Navbar.Brand href="#home" className='navbar-brand mx-md-none'>
                        <Image  src={HrLogo} class="img-fluid w-100" />
                    </Navbar.Brand>
                    <Nav className="ms-auto align-items-center top_nav" >
                        <Nav.Link href="#home"><Bell style={{ fontSize: '28px' }}></Bell></Nav.Link>
                        <NavDropdown className="d-flex" title={
                                <span>
                                    <Image img-fluid width="40px" className='me-2'
                                        src={userPic} 
                                        alt="user pic"
                                    />   
                                    {user}  
                                </span>                       
                            }  id="basic-nav-dropdown" align="end">  
                            <NavDropdown.Item href="#action/3.1">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Change Password
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <Navbar expand="md" className='main_nav'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="align-items-center  justify-content-between w-100" >
                                <Nav.Link src="javascript:;">Dashboard</Nav.Link>
                                <NavDropdown title="User Management" id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Manage Employees" id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="PIM Setup " id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Appraisals" id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Payroll Section" id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Finance Utilities " id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Reports" id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}
export default Header;