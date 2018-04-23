import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { getWeatherFromNet } from "../service";

export default class WeatherForTown extends React.Component {
  state = { weatherData: undefined };

  componentDidMount() {
    this.getWeather();   
  }

  getWeather = async () => {
    const Data = await getWeatherFromNet(
      this.props.navigation.state.params.cityId
    );
    console.log(JSON.stringify(Data: temp))

    this.setState({
     // weatherData : Data.main.temp
      );
    });
  };

  render() {
    const { goBack } = this.props.navigation;
    const { weatherData } = this.state;
    console.log("render", weatherData);
    console.log("ewfewfewef");
    
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>
          Привет, я {this.props.navigation.state.params.cityId} экран ;)
        </Text>

        {/* {!!weatherData && <Text>{weatherData.data.main.temp}</Text>} */}

        <Text> {weatherData} </Text>

        <Text />
        <Button title="Назад" onPress={() => goBack()} />
      </View>
    );
  }
}
