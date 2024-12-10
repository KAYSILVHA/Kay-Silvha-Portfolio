
import React, { useEffect, useState } from 'react';
import "./assets/style/header-sass.scss"
import * as eva from 'eva-icons';

import Logo from "./assets/images/Logo.png";
import Whats from "./assets/images/icon-whatsapp.png";
import Mail from "./assets/images/mail.png";
import MailMobile from "./assets/images/email-mobile.png";
import GitHub from "./assets/images/icon-github.png";
import GitHubMobile from "./assets/images/github-mobile.png";
import WhatsMobile from "./assets/images/whatsApp-mobile.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Menu from "./assets/images/menu.png";

import {
    Button,
    Card,
} from "reactstrap"

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        eva.replace();
    }, []);

    return (
        <header className="container-fluid d-flex align-items-center">
            <section className="container d-flex justify-content-between align-items-center nav-bar text-light">
                <div className="container d-xl-none d-flex justify-content-between ">
                    <img src={Logo} alt="Logo" />
                    <Button onClick={handleShow} className='button bg-transparent border-0'>
                        {/* <i data-eva="menu-outline"></i> */}
                        <img src={Menu} alt="Menu" />
                    </Button>
                </div>
                <Offcanvas show={show} onHide={handleClose} className="bg-dark offcanvas">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className='title'>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="nav flex-column">
                            <div className="nav-item d-flex align-items-center mb-4">
                                <img className='nav-image' src={WhatsMobile} alt="WhatsApp" />
                                <a href="https://wa.me/5544991270271?text=Olá!%20Te%20encontrei%20pelo%20seu%20portfólio.%20Vamos%20conversar?" target="_blank" className="nav-link text-white">WhatsApp</a>
                            </div>
                            <div className="nav-item d-flex align-items-center mb-4">
                                <img className='nav-image' src={GitHubMobile} alt="GITHUB" />
                                <a href="https://github.com/KAYSILVHA" target='_blank' className="nav-link text-white">GitHub</a>
                            </div>
                            <div className="nav-item d-flex align-items-center mb-4">
                                <img className='nav-image' src={MailMobile} alt="Email" />
                                <a href="mailto:kaysilvha@gmail.com?subject=Contato%20pelo%20portfólio&body=Olá!%20Te%20encontrei%20pelo%20seu%20portfólio.%20Gostaria%20de%20conversar." target='_blank' className="nav-link text-white">Email</a>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>

                <section className="container d-none d-xl-flex justify-content-between align-items-center nav-bar text-light">
                    <img src={Logo} alt="" />
                    <div className='d-flex align-items-center'>
                        <div className="nav-item">
                            <a href="#services" className="nav-link">Services</a>
                        </div>
                        <div className="nav-item">
                            <a href="#certifications" className="nav-link">Certifications</a>
                        </div>
                        <div className="nav-item">
                            <a href="#works" className="nav-link">Works</a>
                        </div>
                        {/* <div className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </div> */}
                        <div className="nav-item">
                            <a href="#contacts" className="nav-link">Contacts</a>
                        </div>
                    </div>
                    <div className='nav-two d-flex align-items-center'>
                        <div className="nav-item d-flex align-items-center">
                            <img src={Whats} alt="Logo WhatsApp" className='whatsLogo' />
                            <a href="https://wa.me/5544991270271?text=Olá!%20Te%20encontrei%20pelo%20seu%20portfólio.%20Vamos%20conversar?" target="_blank" className="nav-link">WhatsApp</a>
                        </div>
                        <div className="nav-item d-flex align-items-center">
                            <img src={GitHub} alt="Logo GitHub" className='gitHubLogo' />
                            <a href="https://github.com/KAYSILVHA" target='_blank' className="nav-link">GitHub</a>
                        </div>
                        <a href="mailto:kaysilvha@gmail.com?subject=Contato%20pelo%20portfólio&body=Olá!%20Te%20encontrei%20pelo%20seu%20portfólio.%20Gostaria%20de%20conversar." target='_blank'>
                        <div className="nav-item d-flex align-items-center">
                           <img src={Mail} alt="Email" className='mail' />
                        </div>
                        </a>
                    </div>
                </section>
            </section>
        </header>
    );
};

export default Header;
