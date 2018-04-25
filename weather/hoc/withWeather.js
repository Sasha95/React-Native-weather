import React from "react";
import { getWeatherFromNet } from "../service";

export const withWeather = Component => {
  return class extends React.Component {
    async componentDidMount() {
      this.props.getWeather(
        await getWeatherFromNet(this.props.navigation.state.params.cityId)
      );
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};
