import React, { useState } from "react";

import Footer from "../components/Footer";
import Modal from "../components/UIElements/Modal";

import "./MainPage.css"

const MainPage = () => {

    const [showModal, setShowModal] = useState(false);

        const closeModalHandler = () => {
        setShowModal(false);
    };

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

            <button onClick={() => setShowModal(true)}>Open Modal</button>

            <Modal
                show={showModal}
                onCancel={() => closeModalHandler}
                footer={<button onClick={closeModalHandler}>Close</button>}
            >
                <p>This is some content inside the modal.</p>
                <p>You can put text, forms, or even components here.</p>
                <div className="modal-works">h</div>
            </Modal>

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