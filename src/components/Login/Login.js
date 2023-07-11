import React from 'react'
import {Row , Col, Form , Container, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LoginImage from "../../assets/images/login_logo.png"
import LoginTopV from "../../assets/images/login_v_top.png"
import LoginTopB from "../../assets/images/login_v_bottom.png"
import "./Login.css"
function Login() {
    return(
        <section className='login d-flex justify-content-center'>
            <Container fluid>
                <Row>
                    <Col md="6">
                        <div className="login_area justify-content-center mx-auto">
                            <Image src={LoginImage} className="img-fluid mx-auto" alt='Logo'/>
                        </div>
                    </Col>
                    <Col  md="6">
                    <div className="row mobile_web position-relative">
                        <Col md="12">
                            <div className="login_area justify-content-center mx-auto">
                                <div className="login_area_top">
                                    <div className="sign_in">
                                        Sign In
                                        <div className="slogan">Please enter login details</div>
                                    </div>
                                </div>
                                <Form action="dashboard.html" method="post">
                                    <Row>
                                        <Col sm="12"  className="mb-4">
                                            <Form.Control  type="email"  placeholder="Email" />
                                        </Col>
                                        <Col sm="12" className="mb-4">
                                            <Form.Control  type="password"  placeholder="Password" />
                                        </Col>
                                        <Col sm="6" className="mb-4">
                                            <Form.Check type="checkbox" label="Remember Me" />
                                        </Col>
                                        <Col sm="6" className="text-end mb-4 remember_me">
                                            <Link to="javascript:;" className='d-block'>Forget Password ?</Link>
                                        </Col>
                                        <Col sm="12" className="mt-3">
                                        <Link to="/Home" className="btn btn-success btn-block w-100 login_btn">
                                            Login
                                        </Link>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className="login_v_top">
                                <Image src={LoginTopV} img-fluid className="w-100" alt='Login Top' />
                            </div>
                            <div className="login_v_bottom">
                                <Image src={LoginTopB} img-fluid  className="w-100" alt='Login Bottom' />
                            </div>
                        </Col>
                        <div className="clearfix"></div>
                    </div>
                    </Col>
                </Row>
        </Container>
      </section>
    )
}
export default Login;