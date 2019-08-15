import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import travelGuideImage from "./../assets/travelgid.jpg";
import ticketsImage from "./../assets/faretix.jpg";
import trainImage from "./../assets/pnr-status.jpg";

const HomePage = () => {
  return (
    <Container>
      <h1 className="header">Home</h1>
      <Row>
        <Col>
          <img src={travelGuideImage} alt="" className="img imageHome" />
          <h3 className="imageHeaderCaption">Travel Guide</h3>
        </Col>
        <Col>
          <img src={ticketsImage} alt="" className="img imageHome" />
          <h3 className="imageHeaderCaption">Fares and Tickets</h3>
        </Col>
        <Col>
          <img src={trainImage} alt="" className="img imageHome" />
          <h3 className="imageHeaderCaption">Train Status</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
