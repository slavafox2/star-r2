import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";

const withSwapiService = (Wrap, map_Methods_To_Props) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapi_service_from_consumer) => {
          const service_Props = map_Methods_To_Props(swapi_service_from_consumer);
          return <Wrap {...props} {...service_Props} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
