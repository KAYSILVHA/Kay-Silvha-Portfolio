import React from 'react';
import Banner from "./Components/Banner/Banner";
import Certifications from "./Components/Certifications/Certifications";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Introduce from "./Components/Introduce/Introduce";
import Services from "./Components/MyServices/Services";
import Works from "./Components/Works/Works";
import "./Home/assets/style/home-sass.scss"

function App() {

  return (
    <body>
      <Header/>
      <Banner/>
      <Introduce/>
      <Certifications/>
      <Works/>
      <Services/>
      <Footer/>
    </body>
  )
}

export default App;
