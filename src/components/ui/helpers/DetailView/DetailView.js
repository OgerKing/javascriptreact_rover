import React from "react";
import "./DetailView.css";

const DetailView = ({ title, detail }) => (
  <div className="detail-container">
    <div className="detail-title">{title}:&nbsp;</div>
    <div>{detail}</div>
    <hr />
  </div>
);

export default DetailView;
