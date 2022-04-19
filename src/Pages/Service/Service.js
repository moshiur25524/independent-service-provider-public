import React from "react";
import { Button, Card } from "react-bootstrap";
import './Service.css'

const Service = ({ service }) => {
  const { subject, img, fee, description } = service;

  return (
    <div className="service-detail">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{subject}</Card.Title>
          <h4>fee: {fee} tk</h4>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Enroll Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
