import React, { useState } from "react";
import { Container, Form, Col, Row, Button, Spinner } from "react-bootstrap";
import Loader from "react-loader-spinner";
import Stepper from "react-stepper-horizontal";

const RoutePage = () => {
  const [computeDetails, setComputeDetails] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const openSpinner = () => {
    setShowSpinner(true);
    setInterval(() => {
      setComputeDetails(true);
      setShowSpinner(false);
    }, 3000);
  };

  return (
    <Container>
      <h1 className="header">Route</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Station start:</Form.Label>
            <Form.Control as="select">
              <option selected disabled>
                Select Station
              </option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Destination:</Form.Label>
            <Form.Control as="select">
              <option selected disabled>
                Select Station
              </option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <Col>
            <Button
              variant="primary"
              // type="submit"
              block
              style={{ marginTop: "2em" }}
              onClick={openSpinner}
            >
              Calculate Route
            </Button>
          </Col>
        </Form.Row>
      </Form>
      {showSpinner && <SpinnerComponent />}
      {computeDetails && <Details />}
    </Container>
  );
};

const SpinnerComponent = () => (
  <div className="spinner">
    <Loader type="Circles" color="#FF9033" height="100" width="100" />
    <p style={{ color: "#FF9033", marginTop: "1em" }}>Computing . . .</p>
  </div>
);

const Details = () => {
  return (
    <>
      <Row style={{ marginTop: "3em" }}>
        <Col>
          <h2 className="text-center">30 Minutes</h2>
        </Col>
        <Col>
          <h2 className="text-center">3 Stations</h2>
        </Col>
      </Row>
      <div style={{ marginTop: "2em" }}>
        <Stepper
          steps={[
            { title: "Station 1" },
            { title: "Station 2" },
            { title: "Station 3" },
            { title: "Station 4" }
          ]}
          activeStep={0}
        />
      </div>
    </>
  );
};

export default RoutePage;
