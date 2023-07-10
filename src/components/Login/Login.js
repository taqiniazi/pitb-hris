import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
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
                            <img src={LoginImage} className="img-fluid mx-auto" />
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
                                <form action="dashboard.html" method="post">
                                    <Row>
                                        <Col sm="12"  className="mb-4">
                                            <Form.Control  type="email"  placeholder="Email" />
                                        </Col>
                                        <Col sm="12" className="mb-4">
                                            <Form.Control  type="password"  placeholder="Password" />
                                        </Col>
                                        <Col sm="6" className="mb-4">
                                            <Form.Check type="checkbox" label="Remember Me" />
                                            {/* <div className="form-check remember_me">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" /> <label className="form-check-label" for="gridCheck">
                                                    Remember Me
                                                </label>
                                            </div> */}
                                        </Col>
                                        <Col sm="6" className="text-end mb-4 remember_me">
                                        <a href="javascript:;" className='d-block'>Forget Password ?</a>
                                        </Col>
                                        <Col sm="12" className="mt-3">
                                        <button className="btn btn-success btn-block w-100 login_btn" type="submit">
                                            Login
                                        </button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                            <div className="login_v_top">
                                <img src={LoginTopV} className="img-fluid w-100" />
                            </div>
                            <div className="login_v_bottom">
                                <img src={LoginTopB}  className="img-fluid w-100" />
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