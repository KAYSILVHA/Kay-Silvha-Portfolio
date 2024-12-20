import React from 'react';
import {
    Card,
    CardBody,
    Col,
} from 'reactstrap';

import "./assets/style/works-sass.scss"

function Works() {

    return (
        <div className='container-fluid works' id='works'>
            <div className="container d-flex flex-column align-items-lg-start justify-content-lg-start align-items-center justify-content-center">
                <h2 className='text-lg-start text-center'>Latest Works</h2>
                <p className='text-lg-start text-center'>It’s my creative moment :)</p>
                <div className="w-100 d-flex flex-wrap align-items-center justify-content-lg-start  justify-content-center container-cards">
                    <Card>
                        <CardBody className='one d-flex flex-column justify-content-end'>
                            <h3>Lord of Rings </h3>
                            <p>Because I really love this trilogy!</p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className='two d-flex flex-column justify-content-end'>
                            <h3>One piece</h3>
                            <p>Yes I’m a OTAKU!</p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className='three d-flex flex-column justify-content-end'>
                            <h3>Ohayo Candy Shop</h3>
                            <p>And yes, i like candys</p>
                        </CardBody>
                    </Card>
                </div>
                <div className='all-projects'>
                    <h5><a href="https://github.com/KAYSILVHA" target='_blank'>ALL PROJECTS</a></h5>
                    <p className='text'>Some projects are not available, please contact me to see them</p>
                </div>
            </div>
        </div>
    )
}

export default Works;