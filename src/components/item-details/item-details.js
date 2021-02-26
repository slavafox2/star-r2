import React, { cloneElement, Component } from "react";
// import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

// export default class PersonDetails extends Component {
export default class ItemDetails extends Component {
  // swapiService = new SwapiService();
  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState) {
    //clause "if" needs for avoiding multiple updating State when RENDER will reveal updated data
    if (
      prevProps.itemId !== this.props.itemId ||
      prevProps.getData !== this.props.getData ||
      prevProps.getImageUrl !== this.props.getImageUrl
    ) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((argums) => {
      this.setState({
        item: argums,
        image: getImageUrl(argums),
      });
    });
  };

  render() {
    const item = this.state.item;

    if (!this.state.item) {
      return <span>Taking a person-item info from list.</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.item;

    return (
      <div className="item-details card">
        <img
          className="item-image"
          alt="item"
          src={this.state.image}
          // src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

        <div className="card-body">
          <h4>
            {name} {this.props.itemId}
          </h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, idx) => {
              return React.cloneElement(child, { item });
              // <li>{idx}</li>;
            })}
            {/* <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li> */}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}

// const f = (a) => {
//   return (b) {

//   }
// }
