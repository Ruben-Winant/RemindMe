import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import SearchBar from "./SearchBar";
import Movies from "../Types/Movies";
import MovieScrollView from "./MovieScrollView";

type MovieHomeProps = {};
type MovieHomeState = {
  upcomingMovies: Movies;
  upcomingMoviesLoaded: boolean;
  popularMovies: Movies;
  popularMoviesLoaded: boolean;
};

class MovieHome extends Component<MovieHomeProps, MovieHomeState> {
  constructor(props: MovieHomeProps) {
    super(props);
    this.state = {
      upcomingMovies: null,
      upcomingMoviesLoaded: false,
      popularMovies: null,
      popularMoviesLoaded: false
    };
  }

  componentDidMount() {
    this.GetUpcomingMovieData();
    this.GetPopularMovieData();
  }

  GetUpcomingMovieData() {
    let url: string = "https://api.themoviedb.org/3/movie/upcoming";
    let apiKey: string = "?api_key=396734bc8915c8d1569cb4ff49b59c56&page=1";
    fetch(url + apiKey)
      .then(result => result.json())
      .then(data =>
        this.setState({
          upcomingMovies: data,
          upcomingMoviesLoaded: true
        })
      )
      .catch(console.log);
  }

  GetPopularMovieData() {
    let url: string = "https://api.themoviedb.org/3/movie/popular";
    let apiKey: string = "?api_key=396734bc8915c8d1569cb4ff49b59c56";
    fetch(url + apiKey)
      .then(result => result.json())
      .then(data =>
        this.setState({
          popularMovies: data,
          popularMoviesLoaded: true
        })
      )
      .catch(console.log);
  }

  render() {
    return (
      <View
        style={{
          marginLeft: "6%",
          marginRight: "6%",
          marginTop: "10%",
          marginBottom: "5%"
        }}
      >
        <SearchBar title="Explore movies" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {this.state.upcomingMoviesLoaded ? (
              <MovieScrollView
                content={this.state.upcomingMovies}
                title="Upcoming movies"
                popularMovies={false}
              />
            ) : null}
            {this.state.upcomingMoviesLoaded ? (
              <MovieScrollView
                content={this.state.popularMovies}
                title="Popular movies"
                popularMovies={true}
              />
            ) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MovieHome;
