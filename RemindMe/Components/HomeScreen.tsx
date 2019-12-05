import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import MovieHome from "../Components/MovieHome";
import MovieScrollView from "./MovieScrollView";

type HomeScreenProps = {};

class HomeScreen extends Component<HomeScreenProps> {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Text>Home</Text>
      </View>
    );
  }
}
export default HomeScreen;
