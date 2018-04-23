import React from "react";
import { Button, View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { Select, Option } from "react-native-chooser";

import WeatherForTown from "./screens/WeatherForTown";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Select Me Please" };
  }
  onSelect(value, label) {
    this.setState({ value: value });
    console.log(value);
    console.log(label);
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Select
          onSelect={this.onSelect.bind(this)}
          defaultText={this.state.value}
          style={{ borderWidth: 1, borderColor: "green" }}
          textStyle={{}}
          backdropStyle={{ backgroundColor: "#d3d5d6" }}
          optionListStyle={{ backgroundColor: "#F5FCFF" }}
        >
          <Option value="azhar">Azhar</Option>
          <Option value="johnceena">Johnceena</Option>
          <Option value="undertaker">Undertaker</Option>
          <Option value="Daniel">Daniel</Option>
          <Option value="Roman">Roman</Option>
          <Option value="Stonecold">Stonecold</Option>
          <Option value="Rock">Rock</Option>
          <Option value="Sheild">Sheild</Option>
          <Option value="Orton">Orton</Option>
        </Select>

        <Text>Домашняя страница </Text>
        <Text />
        <Button
          title="Погода в Тирасполе"
          onPress={() => navigate("TownWeather", { cityId: "617239" })}
        />
        <Text />
        <Button
          title="Погода в Берлине"
          onPress={() => navigate("TownWeather", { cityId: "2950159" })}
        />
        <Text />

        <Button
          title="Погода в Каменке"
          onPress={() => navigate("TownWeather", { cityId: "618453" })}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    TownWeather: {
      screen: WeatherForTown
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
