import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {

    return (
      <footer className="mt-5">
        <Container fluid={true}>
          <Row className="border-top justify-content-between p-3">
            <Col className="p-0" md={3} sm={12}>
              Carlos Selva
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>
              Site created by Carlos Selva
            </Col>
          </Row>
        </Container>
      </footer>
    );
  
}

export default Footer;