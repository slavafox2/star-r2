import React, { Component } from "react";
import ItemDetails from "../item-details";
// import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import withData from "../hoc-helpers/with-data";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";

const ItemList = (props) => {
  // swapiservice = new SwapiService();

  // state = {
  //   itemList: null,
  // };

  // componentDidMount() {
  //   const { getData } = this.props;

  //   getData().then((itemList) => {
  //     this.setState({ itemList });
  //   });
  // }
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => {
          onItemSelected(id);
        }}
      >
        {label}
      </li>
    );
  });


  return (
    <ul className="item-list list-group list-group-my">
      {items}
    </ul>
  );
};

// const { getAllPeople } = new  SwapiService();

// export default withData(ItemList);
export default ItemList;
