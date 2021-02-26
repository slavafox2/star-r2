import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  // RandomPlanet.defaultProps = { ....
  static defaultProps = {
    updateInterval: 20000,
  };

  static propTypes = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof value === "number" && !isNaN(value)) {
        return null;
      }
      return new TypeError(`${componentName}: ${propName} must be number`);
    },
  };

  state = {
    planet: {},
    loading: true,
    // id: null,
    // name: null,
    // rotationPeriod: null,
    // population: null,
    // diameter: null,
    error: false,
  };

  // whne component updating the constructor are evoking
  // constructor() {
  //   super();
  //   // this.updatePlanet();
  //   // this.interval = setInterval(tis.updatePlanet, 2500);
  //   // // clearInterval(this.interval);
  // }

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval); // updateInterval == 25000
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({ error: true });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    let contentOrSpinner = null;

    if (error) {
      contentOrSpinner = <ErrorIndicator />;
    } else if (loading) {
      contentOrSpinner = <Spinner />;
    } else {
      contentOrSpinner = <PlanetView planet={planet} />;
    }

    // if (loading) {
    //   return <Spinner />;
    // }

    return (
      <div className="random-planet jumbotron rounded">{contentOrSpinner}</div>
    );
  }
}

// that code is the same like to use 'static'  static defaultProps = {    updateInterval: 10000,  };

RandomPlanet.defaultProps = {
  updateInterval: 10000,
};

const PlanetView = ({ planet }) => {
  const { id, name, rotationPeriod, population, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        alt="planet"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation planet</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
