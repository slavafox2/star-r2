import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";
import RandomPlanet from "../random-planet";
// import ItemList from "../item-list";
// import ItemDetails, { Record } from "../item-details/item-details";

import "./app.css";
// import PeoplePage from "../people-page/people-page";
// import ErrorButton from "../error-button/error-button";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";
// import Row from "../row";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
// import {
//   PersonDetails,
//   PlanetDetails,
//   StarshipDetails,
//   PersonList,
//   PlanetList,
//   StarshipList,
// } from "../sw-components";
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  SecretPage,
  LoginPage,
} from "../pages/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
  // swapiService = new SwapiService();
  // swapiService = new DummySwapiService();

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
    // swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onButtonChangeService = () => {
    this.setState((state) => {
      const Service =
        state.swapiService instanceof SwapiService
          ? DummySwapiService
          : SwapiService;

      return { swapiService: new Service() };
    });
  };

  onLogin = () => {
    this.setState((state) => {
      return { isLoggedIn: !state.isLoggedIn };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null; // <RandomPlanet updateInterval="2000" />  or <RandomPlanet updateInterval={false} />
    const isLoggedInFromState = this.state.isLoggedIn;
    // const {
    //   getPerson,
    //   getStarship,
    //   getPersonImage,
    //   getStarshipImage,
    //   getAllPeople,
    //   getAllPlanets,
    // } = this.state.swapiService;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            {/* <Switch> */}
              <div className="stardb-app">
                <Header buttonChangeService={this.onButtonChangeService} />

                {planet}

                <button
                  className="toggle-planet btn btn-warning btn-lg"
                  onClick={this.toggleRandomPlanet}
                >
                  Toggle Random Planet
                </button>
                <Route
                  path="/"
                  render={() => <h2>Welcom on The main page.</h2>}
                  exact={true}
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planet/" component={PlanetPage} />
                <Route path="/starships" exact component={StarshipPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    // render={({ match, location, history }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => {
                    return (
                      <LoginPage
                        isLoggedIn={isLoggedInFromState}
                        onLogin={this.onLogin}
                      />
                    );
                  }}
                />
                <Route
                  path="/secret"
                  render={() => {
                    return <SecretPage isLoggedIn={isLoggedInFromState} />;
                  }}
                />
                {/* <Route render={() => <h1> here page not found.</h1>} /> */}
                <Redirect
                  to="/"
                  // render={() => <h4> Your page isn't found.</h4>}
                />
              </div>
            {/* </Switch> */}
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
