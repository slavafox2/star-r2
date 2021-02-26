import React from "react";

import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";
import ItemDetails, { Record } from "../item-details/item-details";


const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {(swapi_servicer_from_Provider) => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={swapi_servicer_from_Provider.getStarship}
            getImageUrl={swapi_servicer_from_Provider.getStarshipImage}
          >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;
