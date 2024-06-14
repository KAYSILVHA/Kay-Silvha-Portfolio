import React from 'react';
import "./assets/style/footer-sass.scss"

import {
    Col
} from "reactstrap";

function Footer() {

    return (
        <>
            <section className='container-fluid footer h-auto'>
                <section className="container">
                    <div className='w-100 d-flex justify-content-center align-items-center'>
                        <Col className='col-lg-6'>
                            <h2 className='text-light'>Let’s make something amazing together.</h2>
                            <h2 className='text-light'>Start by saying “<span>hey there!</span>”</h2>
                        </Col>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Footer;