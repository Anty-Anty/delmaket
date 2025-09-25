import React, { useState } from "react";

import Footer from "../components/Footer";
import Modal from "../components/UIElements/Modal";

import "./MainPage.css"

const MainPage = () => {

    const [showModal, setShowModal] = useState(false);

    const closeModalHandler = () => { setShowModal(false) };

    return (
        <>
            <div className="logo">
                <a href="#home">delmaket</a>
                
            </div>

            <div className="links">
                <a href="#models">макеты</a>
                <a href="#contacts">контакты</a>
            </div>

            <div id="home" className="main-photo">
                <p>Макеты, которые рассказывают <br /> историю вашего проекта</p>
                
                <img src="/images/main.webp" alt="photo" />
            </div>

            <div onClick={() => setShowModal(true)}>Open Modal</div>
                <p>Нашей макетной мастерской более 25 лет. Мы делаем макеты любой сложности.</p>
            <div className="info">
                
            </div>
            <div id="models" className="works"></div>
            <div className="about"></div>
            <div className="clients"></div>

            <div id="contacts">
                <Footer />
            </div>

             {/* MODAL */}
            {showModal && (
                <button className="modal-close-btn" onClick={closeModalHandler}>
                    ✖
                </button>
            )}

            <Modal
                show={showModal}
                onCancel={closeModalHandler}
            >
                <p>This is some content inside the modal.</p>
                <p>You can put text, forms, or even components here.</p>
                <div className="modal-works">h</div>
            </Modal>

        </>
    )
};

export default MainPage;