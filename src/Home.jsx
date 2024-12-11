import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Certifications from "./Components/Certifications/Certifications";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Introduce from "./Components/Introduce/Introduce";
import Services from "./Components/MyServices/Services";
import Works from "./Components/Works/Works";
import Projects from "./Components/Projects/Projects";
import "./Home/assets/style/home-sass.scss";

function AppContent() {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === "/projects";

    return (
        <>
            {!hideHeaderFooter && <Header />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Banner />
                            <Introduce />
                            <Certifications />
                            <Works />
                            <Services />
                        </>
                    }
                />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
