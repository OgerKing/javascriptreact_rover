import React, { Component } from "react";

//components
import RoverCard from "./RoverCard/RoverCard";
import DefaultCard from "./DefaultCard/DefaultCard";
import { CardDeck, Pagination } from "react-bootstrap";

const RoverGallery = ({ photos }) => (
  <CardDeck>
    {photos.length > 0
      ? photos.map((item, i) => <RoverCard details={item} key={i} />)
      : Array.from(Array(9), (x, i) => <DefaultCard key={i} />)}
  </CardDeck>
);

const RoverPages = ({ onSelectPage, page }) => (
  <Pagination onClick={onSelectPage}>
    <Pagination.Item id="prev">{`‹`}</Pagination.Item>
    <Pagination.Item id="1">{page}</Pagination.Item>
    <Pagination.Item id="next">{`›`}</Pagination.Item>
  </Pagination>
);

export default class RoverDetailView extends Component {
  render() {
    const { onSelectPage, photos, page } = this.props;
    return (
      <>
        <RoverPages onSelectPage={onSelectPage} page={page} />
        <RoverGallery photos={photos} />
      </>
    );
  }
}
