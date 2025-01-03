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

import YoutubeLogo from "./assets/images/youtube-logo.png"
import LinkedInLogo from "./assets/images/linkedin-logo.png"
import FaceLogo from "./assets/images/face-logo.png"
import InstaLogo from "./assets/images/insta-logo.png"
import WhatsLogo from "./assets/images/whats-logo.png"
import MailLogo from "./assets/images/mail-logo.png"

function Footer() {

    return (
        <>
            <section className='container-fluid footer h-auto' id='contacts'>
                <section className="container">
                    <Row className='d-flex justify-content-lg-between justify-content-center align-items-lg-start align-items-center text-lg-start text-center container-footer'>
                        <Col className='col-lg-6 col-12 d-flex flex-column align-items-lg-start align-items-center'>
                            <h2 className='text-light text'>Let’s make something amazing together.</h2>
                            <h2 className='text-light'>Start by saying “<span>hey there!</span>”</h2>
                        </Col>
                        <Col className='col-lg-4 col-12 informations mt-lg-0 mt-5'>
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
                    <Row className='container-last flex-lg-row flex-column-reverse '>
                        <Col className='d-flex flex-md-row flex-column-reverse align-items-md-end align-items-center justify-content-lg-start justify-content-center mt-md-0 mt-2'>
                            <img src={Logo} alt="Logo" />
                            <p className='mb-lg-0'>&#169; 2024. All Rights Reserved</p>
                        </Col>
                        <Col className='col-lg-4 col-12 d-flex align-items-center mb-lg-0 mb-3 justify-content-lg-start justify-content-center'>
                            <Nav className='nav-images d-flex align-items-center justify-content-lg-start justify-content-center'>
                                <NavItem>
                                    <NavLink href='https://www.linkedin.com/in/kayrasilvacardoso/' target='_blank' className='linkedin-img'><img src={LinkedInLogo} alt="Linkedin" /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='https://www.facebook.com/profile.php?id=100088539817707' target='_blank' className='face'><img src={FaceLogo} alt="Facebook" /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='https://www.instagram.com/dev_kay.0/' target='_blank'><img src={InstaLogo} alt="Instagram" /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://wa.me/5544991270271?text=Olá!%20Te%20encontrei%20pelo%20seu%20portfólio.%20Vamos%20conversar?" target="_blank"><img src={WhatsLogo} alt="WhatsApp" /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  href="mailto:kaysilvha@gmail.com?subject=Contato%20pelo%20portfólio&body=Olá!%20Te%20encontrei%20pelo%20seu%20portfólio.%20Gostaria%20de%20conversar." target='_blank'><img src={MailLogo} alt="Email" /></NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </section>
            </section>
        </>
    )
}

export default Footer;