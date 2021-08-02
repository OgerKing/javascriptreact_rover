import React from "react";

import { Card } from "react-bootstrap";
import DetailView from "../../helpers/DetailView/DetailView";

const RoverCard = ({ details }) => (
  <Card border="secondary" className="card-container">
    <Card.Img variant="top" src={details.img_src} />
    <Card.Body>
      <Card.Title>{details.camera.full_name}</Card.Title>
      <div className="detail-section">
        <DetailView title="Date" detail={details.earth_date} />
        <DetailView title="Camera ID" detail={details.camera.id} />
        <DetailView title="Rover ID" detail={details.camera.rover_id} />
        <DetailView title="Image ID" detail={details.id} />
        <DetailView title="Sol" detail={details.sol} />
      </div>
    </Card.Body>
  </Card>
);

export default RoverCard;
