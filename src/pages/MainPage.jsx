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

    // title has to be the same with first number in image file name
    const worksImages = [
        { title: "1", description: "ГАЛС «Театральный Дом»" },
        { title: "2", description: "INSIGMA «Red Side»" },
        { title: "3", description: "INSIGMA «Итальянский Квартал»" },
        { title: "4", description: "Саввино - Сторожевский монастырь" },
        { title: "5", description: "МАГИСТРАТ «West Side»" },
        { title: "6", description: "BARKLI «Barkli Residence»" },
        { title: "9", description: "Резиденция президента, г.Минск" },
        { title: "13", description: "БИПЛАН М Интерьер" },
        { title: "19", description: "ГОРН «Нескучный Home & Spa»" },
        { title: "20", description: "Загородный дом" }
    ];

    //MODAL//
    const [modalImage, setModalImage] = useState(false);
    const [images, setImages] = useState([]);

    const closeModalHandler = () => {
        setModalImage(false);
        setImages([]);
    };

    useEffect(() => {
        if (!modalImage) return;

        const found = [];
        let i = 1;

        const checkNext = () => {
            const testImg = new Image();
            testImg.src = `${import.meta.env.BASE_URL}images/gallery/${modalImage}_${i}.webp`;

            testImg.onload = () => {
                found.push(`${modalImage}_${i}`);
                i++;
                checkNext(); // keep checking next file
            };

            testImg.onerror = () => {
                setImages(found); // stop when file missing
            };
        };

        checkNext();
    }, [modalImage]);

    return (
        <>

            {/* HEADER */}
            <div className={scrolled ? "header scrolled" : "header"}>

                <div className={scrolled ? "logo scrolled" : "logo"}>
                    <a href="#home">
                        <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt="Delmaket logo" className="logo-img" />
                    </a>
                </div>

                <div className={scrolled ? "links scrolled" : "links"}>
                    <a href="#works">макеты</a>
                    <a href="#contacts">контакты</a>
                </div>

            </div>

            {/* MAIN PHOTO */}
            <div id="home" className="main-photo">
                {/* <p>Макеты, которые <br /> рассказывают историю <br /> вашего проекта</p> */}

                <img src={`${import.meta.env.BASE_URL}images/main.webp`} alt="photo" />
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
                            дерева и шпона, пластика <br />
                        </p>
                    </div>
                    <h3>
                        Алгоритм работы
                    </h3>
                    <div className="info-img">
                        <img src={`${import.meta.env.BASE_URL}images/diagram.png`} alt="diagram" />
                    </div>
                </div>
            </div>

            {/* WORKS */}

            {/* <div onClick={() => setShowModal(true)}>Open Modal</div> */}
            <div id="works" className="works">

                <h3>
                    Галерея макетов
                </h3>

                <div className="works-img">
                    {(showAllWorks ? worksImages : worksImages.slice(0, 6)).map((work, index) => (
                        <div key={index} className="works-img-child">
                            <img
                                key={index}
                                src={`${import.meta.env.BASE_URL}images/gallery/${work.title}_1.webp`}
                                alt={work.description}
                                loading="lazy"
                                onClick={() => setModalImage(work.title)}
                            />
                            <p onClick={() => setModalImage(work.title)}>
                                {work.description}
                            </p>
                        </div>
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
                    {showAllWorks ? "Свернуть галерею" : "Показать все макеты"}
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
                    <img src={`${import.meta.env.BASE_URL}images/clients.jpg`} alt="clients" loading="lazy" />
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



            <div className="contacts-breakline"></div>
            <div id="contacts" className="contacts">
                <Footer />
            </div>

            {/* MODAL */}
            {modalImage && (
                <button className="modal-close-btn" onClick={closeModalHandler}>
                    ✖
                </button>
            )}

            <Modal
                show={modalImage}
                onCancel={closeModalHandler}
            >
                <div className="modal-works">
                    {images.map((imgName) => (
                        <img
                            key={imgName}
                            src={`${import.meta.env.BASE_URL}images/gallery/${imgName}.webp`}
                            alt={imgName}
                            loading="lazy"
                        />
                    ))}
                </div>
            </Modal>

        </>
    )
};

export default MainPage;