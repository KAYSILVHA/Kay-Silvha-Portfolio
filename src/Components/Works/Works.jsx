import React from 'react';
import {
    Col,
} from 'reactstrap';

import "./assets/style/works-sass.scss"

import LordOfRings from "./assets/images/king-of-rings.png"
import Ohayo from "./assets/images/candys.png"
import OnePiece from "./assets/images/one-piece.png"
function Works() {

    return (
        <div className='container-fluid works'>
            <div className="container d-flex flex-column align-items-lg-start justify-content-lg-start align-items-center justify-content-center">
                <h2 className='text-lg-start text-center'>Latest Works</h2>
                <p className='text-lg-start text-center'>It’s my creative moment :)</p>
                <div className="w-100 d-flex flex-lg-row flex-column align-items-center justify-content-center">
                    <Col className='col-lg-4'>
                        <img src={LordOfRings} alt="Lord Of Rings" className='image-lord-of-rings' />
                        <div className="text">
                            <h3>Lord of Rings </h3>
                            <p>Because I really love this trilogy!</p>
                        </div>

                    </Col>
                    <Col className='col-lg-4'>
                        <div>
                            <img src={OnePiece} alt="One Piece" className='image-one-piece' />
                        </div>
                        <div className="text">
                            <h3>One piece</h3>
                            <p>Yes I’m a OTAKU!</p>
                        </div>
                    </Col>
                    <Col className='col-lg-4'>
                        <div>
                            <img src={Ohayo} alt="Ohayo Candy Shop" className='ohayo-candys' />
                        </div>
                        <div className="text">
                            <h3>Ohayo Candy Shop</h3>
                            <p>And yes, i like candys</p>
                        </div></Col>
                </div>
                <h5><a href="#">ALL PROJECTS</a></h5>

                <p className='text'>Some projects are not available, please contact me to see them</p>
            </div>
        </div>
    )
}

export default Works;