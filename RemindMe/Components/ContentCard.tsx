import React, { Component } from "react";
import Result from "../Types/Result";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { NavigationInjectedProps, withNavigation } from "react-navigation";

type ContentCardProps = {
  isSerie: boolean;
  movie?: Result;
};
type ContentCardState = {};

class ContentCard extends Component<ContentCardProps, ContentCardState> {
  constructor(props: ContentCardProps) {
    super(props);
    this.state = {};
  }

  render() {
    let posterUrl: string =
      "https://image.tmdb.org/t/p/w200" + this.props.movie.poster_path;

    let rdate = new Date(this.props.movie.release_date).toDateString();

    return (
      <TouchableWithoutFeedback
        onPress={() =>
          // this.props.navigation.navigate("MovieFocusCard", {
          //   movieId: this.props.movie.id
          // })
          alert(this.props.movie.id)
        }
      >
        <View style={{ marginRight: 10, width: 130, height: 300 }}>
          <View>
            <Image
              style={{ width: 130, height: 200, borderRadius: 10 }}
              source={{ uri: posterUrl }}
            />
            <Text
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                position: "absolute",
                right: 0,
                backgroundColor: "#363636",
                paddingBottom: 4,
                paddingTop: 4,
                paddingRight: 10,
                paddingLeft: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                opacity: 0.9
              }}
            >
              {!this.props.movie.vote_average
                ? "TDB"
                : this.props.movie.vote_average}
            </Text>
          </View>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}
          >
            {this.props.movie.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#909090",
              overflow: "scroll",
              textAlign: "center",
              marginTop: "2%"
            }}
          >
            {rdate}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

//export default withNavigation(ContentCard);
export default ContentCard;
