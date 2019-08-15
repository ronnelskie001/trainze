import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import travelGuideImage from "./../assets/travelgid.jpg";
import ticketsImage from "./../assets/faretix.jpg";
import trainImage from "./../assets/pnr-status.jpg";

const HomePage = () => {
  const [changeDetails, setChangeDetails] = useState(0);
  const checkActive = aProps => (changeDetails === aProps ? "active colClick" : "colClick");
  const clickDetails = props => setChangeDetails(props);

  return (
    <Container>
      <h1 className="header">Home</h1>
      <Row>
        <Col className={checkActive(1)} onClick={() => clickDetails(1)}>
          <img src={travelGuideImage} alt="" className="img imageHome" />
          <h3 className="imageHeaderCaption">Travel Guide</h3>
        </Col>
        <Col className={checkActive(2)} onClick={() => clickDetails(2)}>
          <img src={ticketsImage} alt="" className="img imageHome" />
          <h3 className="imageHeaderCaption">Fares and Tickets</h3>
        </Col>
        <Col className={checkActive(3)} onClick={() => clickDetails(3)}>
          <img src={trainImage} alt="" className="img imageHome" />
          <h3 className="imageHeaderCaption">Train Status</h3>
        </Col>
      </Row>

      <Details changeDetails={changeDetails} />
    </Container>
  );
};

const Details = ({ changeDetails }) => {
  switch (changeDetails) {
    case 1:
      return <TravelGuide />;
    default:
      return <></>;
  }
};

const TravelGuide = () => {
  return (
    <div style={{marginTop: "3em"}}>
      <p><b>TRAVEL GUIDELINES</b></p>
      <p>GABAY PANGKALIGTASAN SA PAGSAKAY SA PNR TRAIN</p>
      <p>
        1. Ugaliin po nating humawak sa mga safety hand rails. <br />
        2. Iwasan ang sumandal at humawak sa mag-kabilang pintuan sa tuwing ito
        ay mag-bubukas at mag-sasara. <br />
        3. Huwag pipigilan ang pag-sasara ng tren nang makaiwas sa pagka-ipit sa
        pinto. Huwag din bubuksan ang mga pintuan habang umaandar ang tren,
        tanging pinahihintulutang train personnel lamang ang maaring gumawa
        nito. <br />
        4. Ingatan po ang inyong mga personal na gamit tulad ng cellphone, bag
        at wallet. <br />
        5. Ingatan po ang inyong ticket dahil ito ay kukunin sa paglabas ng
        istasyon, ang pag-kawala po o sadyang walang ticket ay may kaukulang
        penalty. <br />
        6. Ingatan po ang inyong mga daladalahan at mga bagahe. Wala pong
        pananagutan ang kumpanya sa pagkawala ng inyong kagamitan o bagahe.{" "}
        <br />
        7. Maging mapag matyag sa paligid upang makaiwas sa mga taong
        mapagsamantala. <br />
        8. Kung may napupuna na kahina-hinalang tao o bagahe, ipagbigay alam
        agad sa train marshal o konduktor sa tren. <br />
        9. Iwasan din po ang malalakas na pag-uusap sa loob ng tren bilang
        pagbigay galang sa ating kapwa pasahero. <br />
        10. Pagkababa ng tren mag-ingat sa pag-tawid sa riles, siguraduhing
        walang paparating na tren. <br />
        11. Sa panahon ng aberya sa tren tulad ng shutdown, mechanical problem o
        pagka-diskaril, maging mahinahon po tayo at makinig sa gabay na
        sasabihin ng principal konduktor at ipapatupad ng train personnel.
        Iwasang magtulakan at maging maingat sa pag-labas ng tren kung
        kinakailangan at pinapahintulutan na ng train konduktor. <br />
        Inaasahan po ng PNR ang inyong pag-sunod sa mga gabay na ito at hangad
        ng PNR ang inyong ligtas na paglalakbay. <br />
      </p>
    </div>
  );
};

export default HomePage;
