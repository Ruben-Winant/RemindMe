import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MovieFocusCard from "./Components/MovieFocusCard";
import MovieHome from "./Components/MovieHome";
import HomeScreen from "./Components/HomeScreen";

// const MovieHomeStack = createStackNavigator({
//   Movies: { screen: MovieHome },
//   MovieFocusCard: { screen: MovieFocusCard, params: { movieId: Number } }
// });

//const SerieHomeStack = createStackNavigator({});

//const HomeStack = createStackNavigator({ screen: HomeScreen });

const MenuBarBottom = createMaterialBottomTabNavigator(
  {
    Movies: {
      //screen: MovieHomeStack,
      screen: MovieHome,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-videocam" size={26} color={tintColor} />
        )
      }
    },
    Series: {
      //screen: SerieHomeStack,
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-tv" size={26} color={tintColor} />
        )
      }
    },
    Home: {
      //screen: HomeStack,
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-heart" size={26} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#000000",
    inactiveColor: "#9e9e9e",
    barStyle: { backgroundColor: "#ffffff" },
    shifting: false //only shows label when clicked
  }
);

export default createAppContainer(MenuBarBottom);
