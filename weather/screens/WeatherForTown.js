import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getWeatherFromNet } from "../service";
import { withWeather } from "../hoc/withWeather";

const initialState = {
  weatherData: undefined
};

const getWeather = payload => ({
  type: "GET_WEATHER",
  payload
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        weatherData: action.payload
      };
    default:
      return state;
  }
};

const mapToProps = state => {
  return {
    weatherData: state.weatherData
  };
};

class WeatherForTown extends React.Component {
  async componentDidMount() {
    this.props.getWeather(
      await getWeatherFromNet(this.props.navigation.state.params.cityId)
    );
  }
  render() {
    const { weatherData, navigation } = this.props;
    if (!weatherData) return null;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30, color: "red", fontWeight: "bold" }}>
          {weatherData.data.name}
          {"\n"}
        </Text>

        <Text
          style={{
            fontSize: 20
          }}
        >
          Current temp: {weatherData.data.main.temp}°{"\n"}
          High temp: {weatherData.data.main.temp_max}° {"\n"}
          Low temp: {weatherData.data.main.temp_min}° {"\n"}
          Wind Speed: {weatherData.data.wind.speed} m/s{"\n"}
          Pressure: {weatherData.data.main.pressure} mi/hr{"\n"}
          Humidity: {weatherData.data.main.humidity}
        </Text>
        <Text>
          {"\n"}
          {"\n"}
        </Text>
        <Button title="Назад" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default connect(mapToProps, { getWeather })(WeatherForTown);
