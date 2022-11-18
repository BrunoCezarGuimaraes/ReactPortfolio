import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || message === '') {
      alert('Prença pelo menos os campos nome, email e message')
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    emailjs.send("service_5khlm88", "template_n38i22i", templateParams, "p73ntFAizDtAMB1Bd")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      alert("Email enviado com sucesso")
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    }, (err) => {
      console.log('ERRO: ', err)
    })

  }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={{ span: 6, offset: 3 }}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>De um toque</h2>
                  <form  onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={name} placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={phone} placeholder="Phone No." onChange={(e) => setPhone(e.target.value)} />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                      </Col>
                      <div>
                        <button className="float-end" type="submit" value='Enviar'><span>Enviar</span></button>
                      </div>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}