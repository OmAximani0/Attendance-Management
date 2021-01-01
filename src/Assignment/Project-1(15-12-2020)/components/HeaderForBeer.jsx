import React from "react";
import { Header, Image } from "semantic-ui-react";
import BeerIcon from "../img/beerIcon.svg";

const HeaderExampleImage = () => (
  <Header className="head-beer" as="h2">
    <Image className="beer-icon" centered src={BeerIcon} /> The Beer Shop
  </Header>
);

export default HeaderExampleImage;
