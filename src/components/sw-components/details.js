// import React from "react";

// import ItemDetails, { Record } from "../item-details/item-details";
// import SwapiService from "../../services/swapi-service";
// import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context";

// const swapiService = new SwapiService();

// const {
//   getPerson,
//   getPlanet,
//   getStarship,
//   getPersonImage,
//   getPlanetImage,
//   getStarshipImage,
// } = swapiService;

// const PersonDetails = ({ itemId }) => {
//   return (
//     <SwapiServiceConsumer>
//       {(swapiService) => {
//         return (
//           <ItemDetails
//             itemId={itemId}
//             getData={swapiService.getPerson}
//             getImageUrl={swapiService.getPersonImage}
//           >
//             <Record field="gender" label="Gender" />
//             <Record field="eyeColor" label="Eye Color" />
//           </ItemDetails>
//         );
//       }}
//     </SwapiServiceConsumer>
//   );
// };

// const PlanetDetails = ({ itemId }) => {
//   return (
//     <SwapiServiceConsumer>
//       {({ getPlanet, getPlanetImage }) => {
//         return (
//           <ItemDetails
//             itemId={itemId}
//             getData={getPlanet}
//             getImageUrl={getPlanetImage}
//           >
//             <Record field="population" label="Population" />
//             <Record field="rotationPeriod" label="Rotation Period" />
//             <Record field="diameter" label="Diameter" />
//           </ItemDetails>
//         );
//       }}
//     </SwapiServiceConsumer>
//   );
// };

// const StarshipDetails = ({ itemId }) => {
//   return (
//     <SwapiServiceConsumer>
//       {(swapi_servicer_from_Provider) => {
//         return (
//           <ItemDetails
//             itemId={itemId}
//             getData={swapi_servicer_from_Provider.getStarship}
//             getImageUrl={swapi_servicer_from_Provider.getStarshipImage}
//           >
//             <Record field="model" label="Model" />
//             <Record field="length" label="Length" />
//             <Record field="costInCredits" label="Cost" />
//           </ItemDetails>
//         );
//       }}
//     </SwapiServiceConsumer>
//   );
// };

// export { PersonDetails };
