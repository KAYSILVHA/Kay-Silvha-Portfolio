import React from 'react';
import { Badge } from 'reactstrap';
import "./assets/style/banner-sass.scss"
import ImageBanner from "./assets/images/image-banner.png";

function Banner() {

    return (
        <>
            <section className="container-fluid">
                <section className="container banner d-flex flex-lg-row flex-column-reverse algn-items-center justify-content-lg-between justify-content-center">
                    <section className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center">
                        <div className='w-100 d-flex flex-column align-items-lg-start justify-content-lg-start align-items-center justify-content-center'>
                            <div className="badge badge-title">Fullstack Developer</div>
                            <div>
                                <h1 className='text-light text-lg-start text-center'>Talking is easy.</h1>
                                <h1 className='text-light text-lg-start text-center'>Show me the code</h1>
                            </div>
                            <p className='text-lg-start text-center'>I create and code beautiful and incredible things, and I love what I do.</p>
                            <a target="_blank" href="/src/Components/CV/cv.pdf" download="cv.pdf">
                                <button className='btn btn-cv bg-transparent text-white'>
                                    DOWNLOAD CV
                                </button>
                            </a>
                            <a href="#contact" className="link text-lg-start text-center">LET’S TALK!</a>
                        </div>
                        <div className='w-100'></div>
                    </section>
                    <section className="col-lg-6 col-12 d-flex align-items-lg-start justify-content-lg-end align-items-center justify-content-center mb-lg-0 mb-5">
                        <img className="banner-image" src={ImageBanner} alt="Banner Image" />
                    </section>
                </section>
            </section>
        </>
    )
}

export default Banner;