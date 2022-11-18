import { Col, Row } from "react-bootstrap";


export const Newsletter = () => {

  return (
    <Col size={12} md={{ span: 6, offset: 3 }}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={12} xl={12}>
            <div className="new-info-bx">
              <h2> Contato </h2>
              <span>
                Localização: Rio de janeiro
                <br />
                WhatsApp: (21) 98464-5633
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}