import MovieDetails from "../Types/MovieDetails";
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";

type MovieFocusCardProps = {
  movieId?: number;
};
type MovieFocusCardState = {
  movieDetails: MovieDetails;
  loaded: boolean;
};

// class MovieFocusCard extends Component<
//   MovieFocusCardProps & NavigationInjectedProps,
//   MovieFocusCardState
// > {
// constructor(props: MovieFocusCardProps & NavigationInjectedProps) {
//   super(props);
//   this.state = {
//     movieDetails: null,
//     loaded: false
//   };
// }

class MovieFocusCard extends Component<
  MovieFocusCardProps,
  MovieFocusCardState
> {
  constructor(props: MovieFocusCardProps) {
    super(props);
    this.state = {
      movieDetails: null,
      loaded: false
    };
  }

  componentDidMount() {
    this.GetMovieDetails(this.props.movieId);
  }

  GetMovieDetails(id: number) {
    let url: string = "https://api.themoviedb.org/3/movie/";
    let apiKey: string = "?api_key=396734bc8915c8d1569cb4ff49b59c56";
    fetch(url + id + apiKey)
      .then(result => result.json())
      .then(data =>
        this.setState({
          movieDetails: data,
          loaded: true
        })
      )
      .catch(console.log);
  }

  render() {
    let posterUrl: string =
      "https://image.tmdb.org/t/p/w200" + this.state.movieDetails.poster_path;

    let rdate = new Date(
      this.state.movieDetails.release_date
    ).toLocaleDateString();

    let element;
    this.state.loaded
      ? (element = (
          <View>
            <Text>{this.state.movieDetails.title}</Text>
            <Image source={{ uri: posterUrl }} />
            <Text>Release date: {rdate}</Text>
            <Text>Summary: {this.state.movieDetails.overview}</Text>
            <Text>Duration: {this.state.movieDetails.runtime} min</Text>
            <Button
              title="back"
              onPress={() => {
                //this.props.navigation.goBack();
              }}
            >
              Back
            </Button>
          </View>
        ))
      : (element = <Text>Loading</Text>);
    return { element };
  }
}

//export default withNavigation(MovieFocusCard);
export default MovieFocusCard;
