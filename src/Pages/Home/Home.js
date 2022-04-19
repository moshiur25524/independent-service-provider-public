import React from "react";
import { Carousel } from "react-bootstrap";
import classroom1 from "../../Images/classroom1.jpg";
import classroom2 from "../../Images/classroom2.jpg";
import classroom3 from "../../Images/classroom3.jpg";
import Services from "../Services/Services";
import Environment from "../Environment/Environment";

const Home = () => {
  return (
    <div>
      <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={classroom1} alt="First slide" />
          <Carousel.Caption>
            <h3>Eye Catching Room</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={classroom2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Fresh Room</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={classroom3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Fantasy World</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <Services></Services>
      <Environment></Environment>
    </div>
  );
};

export default Home;
