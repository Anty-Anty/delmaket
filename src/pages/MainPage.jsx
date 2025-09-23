import Footer from "../components/Footer";

import "./MainPage.css"

const MainPage = () => {

    return (
        <>
            <div className="logo">
                <a href="#home">delmaket</a>
            </div>

            <div className="links">
                <a href="#models">макеты</a>
                <a href="#about">о мастерской</a>
                <a href="#contacts">контакты</a>
            </div>

            <div id="home" className="main-photo"></div>
            <div className="info"></div>
            <div id="models" className="works"></div>
            <div id="about" className="about"></div>
            <div className="clients"></div>

            <div id="contacts">
                <Footer />
            </div>

        </>
    )
};

export default MainPage;