import React from 'react';
import "./assets/style/footer-sass.scss"

import Logo from "/src/Components/Header/assets/images/Logo.png";

import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row
} from "reactstrap";

function Footer() {

    return (
        <>
            <section className='container-fluid footer h-auto'>
                <section className="container">
                    <Row className='d-flex justify-content-between align-items-start container-footer'>
                        <Col className='col-lg-6 col-12'>
                            <h2 className='text-light text'>Let’s make something amazing together.</h2>
                            <h2 className='text-light'>Start by saying “<span>hey there!</span>”</h2>
                        </Col>
                        <Col className='col-lg-4 col-12 informations'>
                            <p>Information</p>
                            <div className="address">
                                <h5>Paranavai Parana, Brazil</h5>
                                <h2 className='text-white'>kaysilvha@gmail.com</h2>
                            </div>
                            <div className="footer-menu">
                                <Nav className='d-flex flex-column'>
                                    <NavItem>
                                        <NavLink className='px-0 selected' href="#">&lt; Services &gt;</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='p-style' href="#"> Certifications </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='p-style' href="#"> Works </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='p-style' href="#"> Projects </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='p-style' href="#"> Contacts </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                    <Row className='container-last d-flex'>
                        <Col className='d-flex align-items-end'>
                            <img src={Logo} alt="Logo" />
                            <p className='mb-0'>&#169; 2024. All Rights Reserved</p>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </section>
            </section>
        </>
    )
}

export default Footer;