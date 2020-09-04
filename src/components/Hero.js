import React from 'react';
import { Jumbotron, Container, Col, Row, Media } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import mePage from '../assets/web-page-home.jpg';

function Hero(props) {
  
  return(
      <Jumbotron className="jumbotron-fluid p-0">
            <div className="first">

        <Container fluid={true}>
          <Row className="py-5 px-5">
            <div className="second">
              <Fade top>
                <Col md={8} sm={12}>
                  { props.title && <h1 className="title">{props.title}</h1> }
                  { props.subTitle && <h3 className="sub-title">{props.subTitle}</h3> }
                  { props.text && <h3 className="sub-text">{props.text}</h3> }
                </Col>
              </Fade>
            </div>
          </Row>
        </Container>
        </div>
      </Jumbotron>
  );

}

export default Hero;