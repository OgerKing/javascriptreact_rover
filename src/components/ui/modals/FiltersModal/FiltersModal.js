import React, { Component } from "react";
import "./FiltersModal.css";

import { FormControl } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const FilterTitle = ({ title }) => (
  <div className="filter-title">
    <h5>{title}</h5>
  </div>
);

const FilterSelector = ({ title, children }) => (
  <div className="filter-container">
    <FilterTitle title={title} />
    {children}
  </div>
);

const DateSelector = ({ earth_date, onDateChange }) => (
  <FilterSelector title="Date">
    <DayPickerInput
      value={earth_date}
      onDayChange={(s, m, input) => onDateChange(input)}
    />
  </FilterSelector>
);

const CameraSelector = ({ camera, onCameraChange }) => (
  <FilterSelector title="Camera">
    <FormControl as="select" value={camera} onChange={onCameraChange}>
      <option>All</option>
      <option>NAVCAM_LEFT</option>
      <option>MCZ_RIGHT</option>
      <option>MCZ_LEFT</option>
      <option>FRONT_HAZCAM_LEFT_A</option>
      <option>FRONT_HAZCAM_RIGHT_A</option>
      <option>SKYCAM</option>
      <option>SHERLOC_WATSON</option>
      <option>SUPERCAM_RMI</option>
      <option>FHAZ</option>
      <option>RHAZ</option>
      <option>MAST</option>
      <option>CHEMCAM</option>
      <option>MAHLI</option>
      <option>MARDI</option>
      <option>NAVCAM</option>
      <option>PANCAM</option>
      <option>MINITES</option>
    </FormControl>
  </FilterSelector>
);

export default class FiltersModal extends Component {
  render() {
    const {
      show,
      handleClose,
      earth_date,
      onDateChange,
      camera,
      onCameraChange
    } = this.props;
    return (
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DateSelector earth_date={earth_date} onDateChange={onDateChange} />
          <CameraSelector camera={camera} onCameraChange={onCameraChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
