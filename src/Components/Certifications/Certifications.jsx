import React from 'react';
import AluraLogo from "./assets/images/alura-logo.png"
import CubosLogo from "./assets/images/cubos-logo.png"
import DioLogo from "./assets/images/dio-logo.png"
import GoogleLogo from "./assets/images/google-logo.png"
import HostgatorLogo from "./assets/images/hostGator-logo.png"
import IfoodLogo from "./assets/images/ifood-logo.png"
import JaLogo from "./assets/images/ja-logo.png"
import NubeLogo from "./assets/images/nube-logo.png"
import RocketseatLogo from "./assets/images/rocketseat-logo.png"
import UniLogo from "./assets/images/uni-logo.png"
import VNWLogo from "./assets/images/vaiNaWeb-logo.png"
import SenacLogo from "./assets/images/senac_logo.png"
import ProaLogo from "./assets/images/proa-logo.png"

import "./assets/style/certifications-sass.scss"

function Certifications() {

    return (
        <>
            <section className='container-fluid certications h-auto' id='certifications'>
                <section className="container d-flex flex-wrap justify-content-center align-items-center gap-5">
                    <img src={AluraLogo} alt="Alura" />
                    <img src={CubosLogo} alt="Cubos Academy" />
                    <img src={DioLogo} alt="Dio" />
                    <img src={GoogleLogo} alt="Google" />
                    <img src={HostgatorLogo} alt="Hostgator" />
                    <img src={IfoodLogo} alt="Ifood" />
                    <img src={JaLogo} alt="Inspira Ja" />
                    <img src={NubeLogo} alt="Nube" />
                    <img src={RocketseatLogo} alt="Rocketseat" />
                    <img src={UniLogo} alt="Unicesumar" />
                    <img src={VNWLogo} alt="Vai na Web" />
                    <img src={SenacLogo} alt="Senac" />
                    <img src={ProaLogo} alt="Proa" />
                    <a href="https://www.linkedin.com/in/kayrasilvacardoso/details/certifications/" target='_blank'>See More....</a>
                </section>
            </section>
        </>
    )
}

export default Certifications;