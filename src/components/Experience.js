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
                                    <p>
                                        Criação da aplicação Pallet Share, desenvolvimento do projeto Edukhack no Hackathon CCR e conclusão do Bootcamp da IGTI com 98% de aprovação. Além dessas conquistas,  minha experiência inclui a realização de projetos pessoais que estão listados neste site.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Conquistas</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Experiência</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Escolaridade</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <p>Escrevi um artigo científico sobre o software de apoio emocional que criei e ele foi publicado na revista, Tecnologia & Cultura (N: 37 / CEFET/RJ), no dia 1 de janeiro de 2021. O software tem como objetivo auxiliar tratamentos psicológicos para pessoas com ansiedade e depressão.
                                                    <br /><br />
                                                    Desenvolvi e lancei na playstore o aplicativo “Pallet Share”, que visa auxiliar designers na criação de paletas de cores. Dentre as funcionalidades, conta com a possibilidade de compartilhar as paletas e visualizar guias.
                                                    <br /><br />
                                                    Obtive aprovação de 98% no Bootcamp do Instituto de Gestão e Tecnologia da Informação (IGTI).
                                                    <br /><br />
                                                    Participei do Hackathon CCR (segunda edição) como principal programador full stack do projeto. O produto final foi totalmente concluído em 2 dias.
                                                    <br /><br />
                                                </p>

                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">

                                                <Stack direction="horizontal" gap={3} className="col-md-4 mx-auto">
                                                    <a className="buttonExp" href='https://play.google.com/store/apps/details?id=com.moonbeam.paletteshare' target="_blank">Pallet Share</a>

                                                    <a className="buttonExp" href='http://www.cefet-rj.br/index.php/revista-tecnologia-cultura' target="_blank">Artigo</a>

                                                </Stack>

                                            </Tab.Pane>

                                            <Tab.Pane eventKey="third">
                                                <p>Univeritas - Bacharelado em Ciência da Computação -  fev 2016 a dez 2020.
                                                    <br />
                                                    <br />
                                                    Instituto de Gestão e Tecnologia da Informação (IGTI) - Bootcamp desenvolvedor(a) Front-End - maio 2021 - jul 2021.
                                                    <br />
                                                    <br />
                                                    Senai Maracanã - Técnico em programação de jogos digitais -  oct 2014 - abr 2017.
                                                    <br />
                                                    <br />
                                                    Escola Virtual Bradesco - Diversos cursos de programação (lista completa no linkedin) - 2019.
                                                    <br />
                                                    <br />
                                                    CursoemVideo.com - Python / MySQL - 2018
                                                    <br />
                                                    <br />
                                                    Rocketseat - Diversos eventos - 2022
                                                </p>

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