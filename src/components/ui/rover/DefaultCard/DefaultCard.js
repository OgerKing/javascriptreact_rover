import React from "react";
import "./DefaultCard.css";

import { Card } from "react-bootstrap";

const DefaultCard = () => (
  <Card border="secondary" className="card-container">
    <div className="image-skeleton" />
    <Card.Body>
      <div className="title-skeleton" />
      <div className="detail-skeleton" />
      <div className="detail-skeleton" />
    </Card.Body>
  </Card>
);

export default DefaultCard;
