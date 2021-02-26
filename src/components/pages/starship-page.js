import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Row from "../row/row";
import { StarshipDetails, StarshipList } from "../sw-components";

// export default class StarshipPage extends Component {
//   state = {
//     selectedItem: null,
//   };

//   onItemSelected = (selectedItem) => {
//     this.setState(() => {
//       return { selectedItem: selectedItem };
//     });
//   };

//   render() {
//     const { selectedItem } = this.state;

//     return (
//       <Row
//         left={<StarshipList onItemSelected={this.onItemSelected} />}
//         right={<StarshipDetails itemId={selectedItem} />}
//       />
//     );
//   }
// }

const StarshipPage = ({match, location, history}) => {
  return <StarshipList onItemSelected={(itemId) => {
    const pathWithID = "/starships/" + itemId;
    history.push(pathWithID);
  }} />;
};

export default withRouter(StarshipPage);
