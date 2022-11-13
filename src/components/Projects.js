import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

/** Programação Img */
import projImg1 from "../assets/img/portfolio1.jpg";
import projImg2 from "../assets/img/portfolio2.jpg";
import projImg3 from "../assets/img/portfolio3.jpg";
import projImg4 from "../assets/img/portfolio4.jpg";
import projImg6 from "../assets/img/portfolio6.jpg";
import projImg8 from "../assets/img/portfolio8.jpg";

/* Design Web Img */
import projImg9 from '../assets/img/portfolioDW1.jpg'
import projImg10 from '../assets/img/portfolioDW2.jpg'

/* Design Mobile Img */
import projImg11 from '../assets/img/portfolioDM1.jpg'
import projImg12 from '../assets/img/portfolioDM2.jpg'
import projImg13 from '../assets/img/portfolioDM3.jpg'
import projImg14 from '../assets/img/portfolioDM4.jpg'

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Atlas Academy",
      description: "Programação",
      imgUrl: projImg1,
    },
    {
      title: "Dashboard Pessoal",
      description: "Programação",
      imgUrl: projImg2,
    },
    {
      title: "DevCrow - Studios",
      description: "Programação",
      imgUrl: projImg3,
    },
    {
      title: "Letmeask - projeto NLW",
      description: "Programação",
      imgUrl: projImg4,
    },
    {
      title: "Islands Clone Extension",
      description: "Programação",
      imgUrl: projImg8,
    },
    {
      title: "Fitness Academy",
      description: "Programação",
      imgUrl: projImg6,
    },
  ];

  const projectsDesignWeb = [
    {
      title: "Atlas Academy",
      description: "Programação",
      imgUrl: projImg9,
    },
    {
      title: "Atlas Academy",
      description: "Programação",
      imgUrl: projImg10,
    },
  ];

  const projectsDesignMobile = [
    {
      title: "Atlas Academy",
      description: "Programação",
      imgUrl: projImg11,
    },
    {
      title: "Atlas Academy",
      description: "Programação",
      imgUrl: projImg12,
    },
    {
      title: "Atlas Academy",
      description: "Programação",
      imgUrl: projImg13,
    },
    {
      title: "Atlas Academy",
      description: "Programação",
      imgUrl: projImg14,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projetos</h2>
                  <p>Exemplos de projetos práticos de programação e design, para ver mais projetos ou detalhes acessem o github ou o behance.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Programação</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Design Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Design Mobile</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectsDesignWeb.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projectsDesignMobile.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
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