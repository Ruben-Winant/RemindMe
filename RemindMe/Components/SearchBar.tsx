import React, { Component } from "react";
import { Text, View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type SearchBarState = {};
type SearchBarProps = {
  title: string;
};

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ marginBottom: "6%" }}>
        {/* title and setting button */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              marginBottom: 10
            }}
          >
            {this.props.title ? this.props.title : "Welcome"}
          </Text>
          <View>
            <TouchableWithoutFeedback onPress={() => alert("opening settings")}>
              <Ionicons name="md-more" size={26} />
            </TouchableWithoutFeedback>
          </View>
        </View>

        {/* searchbar and search button */}
        <View style={{ flexDirection: "row" }}>
          <TextInput
            autoCorrect={false}
            placeholder="search"
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: 6,
              fontSize: 18,
              height: 40,
              paddingLeft: 10,
              paddingRight: 20,
              flex: 1
            }}
          />
          <TouchableWithoutFeedback
            onPress={() => alert("getting search results")}
          >
            <Ionicons
              style={{
                alignSelf: "center",
                position: "absolute",
                right: 0,
                padding: 10
              }}
              name="md-search"
              size={24}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default SearchBar;
