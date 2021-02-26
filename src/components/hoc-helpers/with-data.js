import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    // getData = this.props.getData;

    componentDidUpdate(prevProps, prevState) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      // const getDataFromSwapi = this.props.getData;
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false,
      });
      this.props
        .getData()
        .then((data) => {
          this.setState({
            data,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      } else if (error) {
        return <ErrorIndicator />;
      } else {
        return <View {...this.props} data={data} />;
      }
    }
  };
};

export default withData;
