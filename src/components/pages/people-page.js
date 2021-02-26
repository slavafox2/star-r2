import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Row from "../row/row";
import { PersonDetails, PersonList } from "../sw-components";

// export default class PeoplePage extends Component {
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
//         left={<PersonList onItemSelected={this.onItemSelected} />}
//         right={<PersonDetails itemId={selectedItem} />}
//       />
//     );
//   }
// }

const PeoplePage = ({ match, location, history }) => {
  const idForURL = match.params.id;
  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={idForURL} />}
    />
  );
};

export default withRouter(PeoplePage);
