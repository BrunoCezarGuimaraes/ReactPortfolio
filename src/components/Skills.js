import meter95 from "../assets/img/meter95.svg";
import meter90 from "../assets/img/meter90.svg";
import meter85 from "../assets/img/meter85.svg";
import meter80 from "../assets/img/meter80.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>As minhas principais habilidades envolvem programação front-end e design Ui/Ux, voltadas para o desenvolvimento de aplicações web e mobile.<br /><br />

                                Devido a esse panorama, posso auxiliar profissionais de ambas as áreas a integrarem-se com a outra, agilizando os resultados. Caso eu desenvolvesse o design de um componente do website, por exemplo, também estruturaria o código deste componente para acelerar o processo de desenvolvimento.

                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter95} alt="Image" />
                                    <h5>Programação Front-End</h5>
                                </div>
                                <div className="item">
                                    <img src={meter90} alt="Image" />
                                    <h5>Ui/Ux Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter80} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter95} alt="Image" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={meter90} alt="Image" />
                                    <h5>Adobe</h5>
                                </div>
                                <div className="item">
                                    <img src={meter80} alt="Image" />
                                    <h5>Photoshop</h5>
                                </div>
                                <div className="item">
                                    <img src={meter90} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter90} alt="Image" />
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={meter80} alt="Image" />
                                    <h5>Vue</h5>
                                </div>
                                <div className="item">
                                    <img src={meter85} alt="Image" />
                                    <h5>Typescript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter90} alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter85} alt="Image" />
                                    <h5>Banco de dados</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}