import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  const { subject, img, fee, description } = service;
  const navigate = useNavigate();

  const handleEnrollbtn = () =>{
      navigate('/checkout')
  }

  return (
    <div className="service-detail">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{subject}</Card.Title>
          <h4>fee: {fee} tk</h4>
          <Card.Text>{description}</Card.Text>
          <Button onClick={handleEnrollbtn} variant="primary">Enroll Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
