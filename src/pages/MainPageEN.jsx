import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import Footer from "../components/Footer";
import Modal from "../components/UIElements/Modal";

import "./MainPage.css"

const MainPage = () => {

    //HEADER//

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
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
        { title: "1", description: "HALS “Theatre House”" },
        { title: "2", description: "INSIGMA «Red Side»" },
        { title: "3", description: "INSIGMA “Italian Quarter”" },
        { title: "4", description: "Savvino-Storozhevsky Monastery" },
        { title: "5", description: "MAGISTRAT «West Side»" },
        { title: "6", description: "BARKLI «Barkli Residence»" },
        { title: "9", description: "Residence, Minsk" },
        { title: "13", description: "BIPLAN M Interior" },
        { title: "19", description: "GORN “Neskuchny Home & Spa”" },
        { title: "20", description: "Private Residence" }
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
                    <Link to="home" smooth={true} duration={50}>
                        <img src={`${import.meta.env.BASE_URL}images/logo_en.svg`} alt="Delmaket logo" className="logo-img" />
                    </Link>
                </div>

                <div className={scrolled ? "links scrolled" : "links"}>
                    <Link to="works" smooth={true} duration={50}>models</Link>
                    <Link to="contacts" smooth={true} duration={50}>contacts</Link>
                    <a href={`${import.meta.env.BASE_URL}`} className="links-en-btn">🌐︎ RU</a>
                </div>

            </div>

            {/* MAIN BACKGROUND IMG */}
            <div id="home" className="main-photo">
                <p>With our help, <br /> your project <br /> will succeed!</p>

                <img src={`${import.meta.env.BASE_URL}images/main.webp`} alt="photo" />
            </div>


            {/* INFO */}
            <div className="info">
                <div className="info-child">
                    <h3>
                        Our model-making workshop has been operating for over 35 years.
                        We create models of any complexity.
                    </h3>

                    <div className="info-bullet-points">
                        <p>
                            • Models for exhibitions<br />
                            • Interactive models <br />
                            • Working models for architects <br />
                        </p>
                        <p>
                            • Urban planning models <br />
                            • Models of cities<br />
                            • Transport models <br />
                        </p>
                        <p>
                            • Building complex models <br />
                            • Cottage models <br />
                            • Models of cottage settlements <br />
                        </p>
                        <p>
                            • Interior models <br />
                            • Models made of cardboard, polystyrene foam, <br />
                            wood and veneer, plastic <br />
                        </p>
                    </div>

                    <h3>
                        Work process
                    </h3>

                    {/* show a different image under 900px width */}
                    <div className="info-img">
                        <picture>
                            <source
                                srcSet={`${import.meta.env.BASE_URL}images/diagram-mobile_en.png`}
                                media="(max-width: 900px)"
                            />
                            <img
                                src={`${import.meta.env.BASE_URL}images/diagram_en.png`}
                                alt="diagram"
                            />
                        </picture>
                    </div>

                </div>
            </div>

            {/* WORKS */}

            {/* <div onClick={() => setShowModal(true)}>Open Modal</div> */}
            <div id="works" className="works">
                <div className="works-child">
                    <h3>
                        Model Gallery
                    </h3>

                    <div className="works-img">
                        {(showAllWorks ? worksImages : worksImages.slice(0, 6)).map((work) => (
                            <div key={work.title}>

                                <div className="works-img-child">
                                    <div className="works-img-click">
                                        <img
                                            src={`${import.meta.env.BASE_URL}images/hand-pointer.svg`}
                                            alt="click"
                                            onClick={() => setModalImage(work.title)}
                                        />

                                    </div>

                                    <img
                                        src={`${import.meta.env.BASE_URL}images/gallery/${work.title}_1.webp`}
                                        alt={work.description}
                                        loading="lazy"
                                        onClick={() => setModalImage(work.title)}
                                        className="works-img-child-img"
                                    />
                                </div>

                                <p onClick={() => setModalImage(work.title)}>
                                    {work.description}
                                </p>

                            </div>
                        ))}
                    </div>

                    <button
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
                        {showAllWorks ? "Hide gallery" : "Show all models"}
                    </button>
                </div>

            </div>

            {/* ABOUT */}
            <div className="about">

                <div>
                    <h3>
                        About the Workshop
                    </h3>

                    <p className="about-child">
                        For more than a quarter of a century, we have been creating scale models —
                        of buildings, complexes, cities, towns, interiors, and vehicles — everything
                        that moves and everything that doesn’t. We build models for different purposes,
                        using various materials, the latest equipment, and modern technologies. <br /><br />

                        Model making is a creative process. There are many goals, tastes, and requirements.
                        On the one hand, a model should help the client quickly and affordably realize
                        their plans; on the other hand, it should be logical, original, and unique.
                        A model is not just an accurate copy of a project or a set of effects —
                        it is a living work of art worthy of professional attention. Our experience
                        and architectural education allow us not only to create models but also to
                        professionally refine architectural designs. <br /><br />

                        We collaborate with architects, engineers, designers, artists, and sculptors,
                        and we welcome partnerships with other model-making studios. <br /><br />

                        If necessary, we can help you choose the right approach, provide consultations,
                        and offer recommendations. Call or write to us — with our help, your project
                        will succeed! <br />
                        The cost of work is determined according to the pricing guidelines
                        recommended by the Moscow City Committee for Construction Pricing
                        and State Project Expertise.
                    </p>
                </div>
            </div>

            {/* CLIENTS */}
            <div className="clients">
                <div>
                    <h3>
                        Among our clients
                    </h3>
                    <img src={`${import.meta.env.BASE_URL}images/clients.jpg`} alt="clients" loading="lazy" />
                </div>
            </div>

            {/* CONTACTS */}

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