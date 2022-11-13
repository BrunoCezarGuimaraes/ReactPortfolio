import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Stack from 'react-bootstrap/Stack';



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {

    return (
        <section className="project" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Conquistas & Experiências</h2>
                                    <p>Conquistas e Experiências adquiridas ao longo dos meus anos de carreira.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Conquistas</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Links</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Experiências</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <p>Minhas conquistas incluem o lançamento do artigo científico sobre um software de apoio emocional, visando auxiliar como apoio a tratamentos psicológicos para pessoa com ansiedade e depressão, na revista: Tecnologia & Cultura N: 37 / CEFET/RJ · 1 de jan de 2021
                                                    <br />
                                                    <br />
                                                    O desenvolvimento e lançamento no playstore do aplicativo Pallet Share, um aplicativo mobile visando auxiliar designs ao criar paletas de cores, com possibilidade de compartilhá-las e acompanhada de mini guias, onde fui responsável pelo design da aplicação e desenvolvimento dos guias.
                                                    <br />
                                                    <br />
                                                    Aprovação de 98% no Bootcamp do Instituto de Gestão e Tecnologia da Informação (IGTI).
                                                    <br />
                                                    <br />
                                                    Participação do Hackathon CCR segunda edição, como principal programador full stack do projeto, com a conclusão no tempo de 2 dias do evento.
                                                </p>

                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">

                                                <Stack  direction="horizontal"  gap={3} className="col-md-4 mx-auto">

                                                    <a className="buttonExp" href='https://play.google.com/store/apps/details?id=com.moonbeam.paletteshare'>Pallet Share</a>

                                                    <a className="buttonExp" href='http://www.cefet-rj.br/index.php/revista-tecnologia-cultura'>Artigo</a>

                                                </Stack>

                                            </Tab.Pane>

                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>

                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}