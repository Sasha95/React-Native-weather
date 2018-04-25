import React from "react";
import { Button, View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./screens/WeatherForTown";

import WeatherForTown from "./screens/WeatherForTown";

const composeEnhancers = true
  ? composeWithDevTools({ shouldHotReload: false })
  : compose;

const store = createStore(reducer, composeEnhancers());

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
