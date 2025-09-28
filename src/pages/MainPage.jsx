import React, { useState, useEffect } from "react";

import Footer from "../components/Footer";
import Modal from "../components/UIElements/Modal";

import "./MainPage.css"

const MainPage = () => {

    //HEADER//

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    //WORKS//
    const [showAllWorks, setShowAllWorks] = useState(false);

    const worksImages = [
        "/images/1_1.jpg",
        "/images/2_1.jpg",
        "/images/3_1.jpg",
        "/images/4_1.jpg",
        "/images/5_1.jpg",
        "/images/6_1.jpg",
        "/images/9_1.jpg",
        "/images/13_1.jpg",
        "/images/19_1.jpg",
        "/images/20_1.jpg",
    ];


    //MODAL//
    const [showModal, setShowModal] = useState(false);

    const closeModalHandler = () => { setShowModal(false) };

    return (
        <>

            {/* HEADER */}
            <div className={scrolled ? "header scrolled" : "header"}>
                <div className="logo">
                    <a href="#home">delmaket</a>

                </div>

                <div className="links">
                    <a href="#works">макеты</a>
                    <a href="#contacts">контакты</a>
                </div>
            </div>

            {/* MAIN PHOTO */}
            <div id="home" className="main-photo">
                {/* <p>Макеты, которые <br /> рассказывают историю <br /> вашего проекта</p> */}

                <img src="/images/main.webp" alt="photo" />
            </div>


            {/* INFO */}
            <div className="info">
                <div className="info-child">
                    <h3>
                        Нашей макетной мастерской более 25 лет. Мы делаем макеты любой сложности.
                    </h3>
                    <div className="info-bullet-points">
                        <p>
                            • Макеты для выставок <br />
                            • Макеты с интерактивным управлением <br />
                            • Рабочие макеты для архитекторов <br />
                        </p>
                        <p>
                            • Градостроительные макеты <br />
                            • Макеты городов <br />
                            • Модели транспорта <br />
                        </p>
                        <p>
                            • Макеты комплексов <br />
                            • Макеты коттеджей <br />
                            • Макеты коттеджных поселков <br />
                        </p>
                        <p>
                            • Макеты интерьеров <br />
                            • Макеты из картона, пенополистерола, <br />
                            деревоа и шпона, пластика <br />
                        </p>
                    </div>
                    <h3>
                        Алгоритм работы
                    </h3>
                    <div className="info-img">
                        <img src="/images/diagram.png" alt="diagram" />
                    </div>
                </div>
            </div>

            {/* WORKS */}
            <div id="works" className="works">
                <div className="works-child">
                    {(showAllWorks ? worksImages : worksImages.slice(0, 6)).map((src, index) => (
                        <img key={index} src={src} alt={`diagram ${index + 1}`} loading="lazy" />
                    ))}
                </div>
                <button
                    className="see-all-btn"
                    onClick={() => {
                        
                        setShowAllWorks(prev => {
                            if (prev === true) {
                                // only scroll when collapsing
                                const worksSection = document.getElementById("works");
                                if (worksSection) {
                                    worksSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }
                            return !prev;
                        });

                    }}
                >
                    {showAllWorks ? "Свернуть галерею" : "Развернуть всю галерею"}
                </button>
            </div>

            {/* ABOUT */}
            <div className="about">

                <div>
                    <h3>
                        Информация о мастерской
                    </h3>

                    <p className="about-child">
                        Более четверти века мы занимаемся макетированием, макетированием зданий,
                        комплексов, городов, посёлков, интерьеров, техники, всего, что движется и
                        не движется. Мы делаем макеты разные по назначению, из разных материалов,
                        используем новейшую технику и современные технологии. <br />
                        <br />
                        Макетирование — творческий процесс. Много целей, вкусов, требований. С
                        одной стороны макет должен помочь заказчику быстро и недорого реализовать
                        свои планы, с другой- быть логичным, оригинальным, неповторимым. Макет не
                        только точная копия проекта и набор спецэффектов — это живое произведение
                        достойное внимания профессионала. Наш опыт и архитектурное образование
                        позволяют не только макетировать, но и профессионально корректировать проекты. <br />
                        <br />
                        Мы сотрудничаем с архитекторами, инженерами, дизайнерами, художниками,
                        скульпторами, приглашаем к сотрудничеству другие макетные мастерские. <br />
                        <br />
                        При необходимости поможем определиться, проконсультируем, порекомендуем.
                        Звоните, пишите, с нами у Вас всё получится! <br />
                        Стоимость определяется расчётом, рекомендованным комитетом города Москвы
                        по ценовой политике в строительстве и государственной экспертизе проектов.
                    </p>
                </div>
            </div>

            {/* CLIENTS */}
            <div className="clients">
                <div>
                    <h3>
                        Среди наших заказчиков
                    </h3>
                    <img src="/images/clients.jpg" alt="clients" loading="lazy" />
                </div>
            </div>

            {/* CONTACTS */}
            {/* <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div> */}

            <div onClick={() => setShowModal(true)}>Open Modal</div>

            <div className="contacts-breakline"></div>
            <div id="contacts" className="contacts">
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