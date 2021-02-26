import React from "react";
import ItemList from "../item-list";

import withData from "../hoc-helpers/with-data";
import with_Swapi_Service from "../hoc-helpers/with-swapi-service";
// import SwapiService from "../../services/swapi-service";

// const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withChildFunction = (Wrap, fn) => {
  return (props) => {
    return <Wrap {...props}>{fn}</Wrap>;
  };
};

const ListWithChild = withChildFunction(ItemList, ({ name }) => {
  return <span>{name}</span>;
}); // {name} -- ???

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

const map_Person_Methods_To_Props = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const map_Planet_Methods_To_Props = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const map_Starship_Methods_To_Props = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = with_Swapi_Service(
                      withData(
                        withChildFunction(ItemList, renderName)
                      ),
                    map_Person_Methods_To_Props
);

const PlanetList = with_Swapi_Service(
  withData(
    withChildFunction(ItemList, renderName)),  map_Planet_Methods_To_Props
);

const StarshipList = with_Swapi_Service(
                     withData(
                     withChildFunction(ItemList, renderModelAndName)),  map_Starship_Methods_To_Props);

export { PersonList, PlanetList, StarshipList };
