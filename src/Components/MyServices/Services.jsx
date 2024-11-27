import React, { useState } from 'react';
import "./assets/style/services-sass.scss";
import { Button, Card, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import Kikyou from "./assets/images/kikyou.png";
import Tomoe from "./assets/images/tomoezinho.png";
import Hinata from "./assets/images/hinatinha.png";
import Inosuke from "./assets/images/mini-inosuke.png";

function Services() {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className='container-fluid service'>
            <div className="container">
                <div className='d-flex flex-lg-row flex-column align-items-center justify-content-lg-between'>
                    <h2>And About my Services?</h2>
                    <p className='mb-0'>What can I do?</p>
                </div>
                <div className='container first d-flex flex-lg-row flex-column align-items-center'>
                    <Col className='col-lg-4'><img src={Kikyou} alt="Kikyo - anime character" /></Col>
                    <Col className='col-lg-7'><p className="text-justify">A fullstack developer and UX/UI designer passionate about what I do. My incessant curiosity drives me to explore new frontiers in the world of development, always looking for inspiring challenges. For me, creating is not just a profession, but a passion that extends beyond codes, encompassing the visual world through my skills as a designer. In my leisure time, I delve into the universe of drawing, study and the magic of creating animations, thus fueling my constant search for innovation and artistic expression.</p></Col>
                </div>
                <div className='navgate-tab'>
                    <Nav tabs className='border-0'>
                        <NavItem className='nav-item'>
                            <NavLink
                                className={activeTab === "1" ? "active nav-link-tab" : "nav-link-tab"}
                                onClick={() => toggle("1")}
                            >
                                Front-End
                            </NavLink>
                        </NavItem>
                        <NavItem className='nav-item'>
                            <NavLink
                                className={activeTab === "2" ? "active nav-link-tab" : "nav-link-tab"}
                                onClick={() => toggle("2")}
                            >
                                Back-End
                            </NavLink>
                        </NavItem>
                        <NavItem className='nav-item'>
                            <NavLink
                                className={activeTab === "3" ? "active nav-link-tab" : "nav-link-tab"}
                                onClick={() => toggle("3")}
                            >
                                Design
                            </NavLink>
                        </NavItem>
                        <NavItem className='nav-item'>
                            <NavLink
                                className={activeTab === "4" ? "active nav-link-tab" : "nav-link-tab"}
                                onClick={() => toggle("4")}
                            >
                                Hobbies
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab} className='tab-content'>
                        <TabPane tabId="1">
                            <Row className='row-tab'>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <img src={Hinata} alt="Hinata" />
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Inosuke} alt="Inosuke" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row className='row-tab'>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row className='row-tab'>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row className='row-tab'>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    <img src={Tomoe} alt="Tomoe" />
                                    <p className='text-tab'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default Services;
