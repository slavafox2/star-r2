import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";
// import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import "./people-page.css";
import Row from "../row";

// class ErrorBoundary extends Component {
//   state = {
//     hasError: false,
//   };

//   componentDidCatch(error, info) {
//     console.log("componentDidCatch(error, info)");
//     debugger;
//     this.setState({
//       hasError: true,
//     });
//   }

//   render() {
//     if (this.state.hasError) {
//       return <ErrorIndicator />;
//     }
//     return this.props.children;
//   }
// }

// const Row = ({ left, right }) => {
//   return (
//     <div className="row mb2 row-my">
//       <div className="col-md-6">{left}</div>
//       <div className="col-md-6">{right}</div>
//     </div>
//   );
// };

export default class PeoplePage extends Component {
  // swapiservice = new SwapiService();
  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiservice.getAllPeople}
        // renderItem={({ name, gender, birthYear }) => {
        //   return `${name} (${gender}, ${birthYear})`;
        // }}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundary>
        <ItemDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}

// renderItem={({name, gender, birthYear}) => {
//   return (`${name} (${gender}, ${birthYear})`)
// }}
