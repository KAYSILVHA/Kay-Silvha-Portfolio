import React from 'react';
import "./assets/style/services-sass.scss";
import {
    Col
} from "reactstrap";

import Kikyou from "./assets/images/kikyou.png";

function Services() {

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
                <div></div>
            </div>
        </div>
    )
}

export default Services;