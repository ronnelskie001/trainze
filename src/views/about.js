import React from "react";
import { Container } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container>
      <h1 className="header">About</h1>

      <h5>COMPANY ADDRESS</h5>
      <p>
        PNR Executive Bldg (Tutuban Station), Mayhaligue Street <br />
        Tondo, Manila 1000
        <br />
        Call: <b> 319-0041</b>
        <br />
        Fax: <b>319-0169</b>
      </p>
      <br />
      <br />
      <h5>MAILING ADDRESS</h5>
      <br/>
      <small>
        All letters such as school request, photo & video shoot request should
        be sent through postal mail addressed to:
      </small>
      <br />
      <h6>The General Manager</h6>
      <p>
        Office Of The General Manager <br />
        4th Floor PNR Executive Bldg, Mayhaligue St. <br />
        Tondo, Manila 1000
      </p>
      <br />
      <small>
        All letters such as application for employment should be sent through
        postal mail addressed to:
      </small>
      <h6>The Manager</h6>
      <p>
        Administration and Finance Department <br />
        4th Floor PNR Executive Bldg, Mayhaligue St. <br />
        Tondo, Manila 1000
      </p>
    </Container>
  );
};

export default AboutPage;
