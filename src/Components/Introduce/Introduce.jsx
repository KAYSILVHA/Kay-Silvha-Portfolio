import React from 'react';

import "./assets/style/introduce-sass.scss"

import BackIcon from "./assets/images/back-icon.png";
import FrontIcon from "./assets/images/front-icon.png";
import DesignIcon from "./assets/images/design-icon.png";

function Introduce() {

    return (
        <>
            <section className='container-fluid introduce h-auto'>
                <section className="container d-flex flex-lg-row flex-column justify-content-lg-between align-items-lg-start justify-content-center align-items-center">
                    <div className="col-lg-6 col-11">
                        <div className="learning">
                            <h2>Design</h2>
                            <img src={DesignIcon} alt="Design ICon" />
                            <p>Create digital products with unique ideas</p>
                        </div>
                        <div className="learning">
                            <h2>Front-end</h2>
                            <img src={FrontIcon} alt="Front ICon" />
                            <p>I develop front-end with coding super smooth</p>
                            {/* <a href="">See some....</a> */}
                        </div>
                        <div className="learning">
                            <h2>Back-end</h2>
                            <img src={BackIcon} alt="Back ICon" />
                            <p>where the code creates the magic behind the scenes</p>
                            {/* <a href="">See some....</a> */}
                        </div>
                    </div>
                    <div className="introduce-text col-lg-5 col-11 text-lg-start text-center mt-lg-0 mt-4">
                        <h5 className='mb-3'>Introduce</h5>
                        <h2 className='mb-4'>Hello! I’m Kayra SIlva Cardoso</h2>
                        <h4 className='mb-3'>Code is the language that translates challenges into solutions.</h4>
                        <p>Since entering the world of technology, my passion for creating and understanding how things work has driven me to become a dedicated programmer. Every line of code is an expression of my love for building something from scratch and unraveling the intricate mechanisms behind digital innovations.</p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Introduce;