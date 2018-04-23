import React from "react";
import { getWeatherFromNet } from "../service";

export const withWeather = Component => {
  return class extends React.Component {
    state = { weatherData: undefined };

    async componentDidMount() {
      this.setState({
        weatherData: await getWeatherFromNet(
          this.props.navigation.state.params.cityId
        )
      });
    }

    render() {
      return <Component {...this.props} weatherData={this.state.weatherData} />;
    }
  };
};
