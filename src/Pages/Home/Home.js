import React from "react";
import { Carousel } from "react-bootstrap";
import classroom1 from "../../Images/classroom1.jpg";
import classroom2 from "../../Images/classroom2.jpg";
import classroom3 from "../../Images/classroom3.jpg";
import Services from "../Services/Services";
import Teachers from "../Teachers/Teachers";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={classroom1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={classroom2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={classroom3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Services></Services>
      <Teachers></Teachers>
    </div>
  );
};

export default Home;
