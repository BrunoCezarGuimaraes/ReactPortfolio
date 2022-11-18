import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from './Newsletter';
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Newsletter />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bruno-cezar-guimar%C3%A3es-099058163/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/BrunoCezarGuimaraes" target="_blank"><img src={navIcon5} alt="Icon" /></a>
              <a href="https://www.behance.net/brunocezarguimaraes" target="_blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}