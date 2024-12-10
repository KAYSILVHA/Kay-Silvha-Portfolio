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
        <div className='container-fluid service' id='services'>
            <div className="container">
                <div className='d-flex flex-lg-row flex-column align-items-center justify-content-lg-between'>
                    <h2 className='text-lg-start text-center'>And About my Services?</h2>
                    <p className='mb-0 text-lg-start text-center'>What can I do?</p>
                </div>
                <div className='container first d-flex flex-lg-row flex-column align-items-center'>
                    <Col className='col-lg-4'><img src={Kikyou} alt="Kikyo - anime character" className='kikyou-img'/></Col>
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
                                <Col className='col-tab d-flex align-items-center justify-content-center'>
                                    {/* <img src={Tomoe} alt="Tomoe" className='tomoe-img'/> */}
                                    <p className='text-tab one'>I have solid experience in Front-End development, mastering technologies such as HTML, CSS and modern frameworks such as React and Bootstrap. My approach combines clean, efficient code with user-centered design, thanks to my knowledge in UX/UI design. I'm always looking for innovative ways to transform ideas into attractive and functional visual interfaces.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-center'>
                                    <p className='text-tab two'>As a Front-End Developer, I love creating visual experiences that delight users. My stack includes HTML, CSS, React, Sass and Bootstrap, tools I use to develop responsive and intuitive interfaces. The integration of design with functionality is my differentiator, always prioritizing accessibility and usability.</p>
                                    {/* <img src={Hinata} alt="Hinata" className='hina-img'/> */}
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-center'>
                                    {/* <img src={Inosuke} alt="Inosuke" className='inosuke-img'/> */}
                                    <p className='text-tab'>Combining my technical skills in Front-End with a refined look as a UX/UI designer, I specialize in transforming designs into interactive interfaces. I use modern technologies such as React, Bootstrap and Sass to create responsive and dynamic projects. I seek to continually learn and collaborate on solutions that positively impact users.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row className='row-tab'>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>My expertise in Back-End development includes languages such as Java, JavaScript, PHP, SQL, and Python. I enjoy building robust systems, ensuring performance and security, with a strong focus on scalability and efficiency to meet project demands.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>Combining technical knowledge with strategic thinking, I develop Back-End solutions that seamlessly connect interfaces. My priority is to optimize server logic to support complex projects effectively.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>I believe the essence of Back-End lies in its ability to transform data into meaningful functionality. I'm always exploring new tools and practices to deliver integrated, high-performance systems.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row className='row-tab'>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>As a UX/UI designer, I turn ideas into functional and visually appealing interfaces. My focus is on creating intuitive experiences that place the user at the center of every project.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>As a UX/UI designer, I turn ideas into functional and visually appealing interfaces. My focus is on creating intuitive experiences that place the user at the center of every project.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>I believe in the power of good design to create connections between people and products. My UX/UI skills enable me to craft visual solutions that communicate, engage, and solve problems effectively.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row className='row-tab'>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>I’m passionate about lifelong learning and knowledge sharing. I’ve taught classes and developed educational content, driven by my love for teaching and learning.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>I enjoy exploring different areas, such as reading and writing, which help expand my creativity and perspective. Creating educational content allows me to combine these interests and contribute to the community.</p>
                                </Col>
                                <Col className='col-tab d-flex align-items-center justify-content-between'>
                                    {/* <img src={Tomoe} alt="Tomoe" /> */}
                                    <p className='text-tab'>Education and creativity are central to my hobbies. Beyond studying and teaching, I love turning ideas into projects that inspire and create a positive impact.</p>
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
