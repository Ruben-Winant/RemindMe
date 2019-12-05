import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Movies from "../Types/Movies";
import ContentCard from "./ContentCard";
import Result from "../Types/Result";

type MovieScrollViewProps = {
  title: string;
  content: Movies;
  popularMovies: boolean;
};
type MovieScrollViewState = {};

class MovieScrollView extends Component<
  MovieScrollViewProps,
  MovieScrollViewState
> {
  constructor(props: MovieScrollViewProps) {
    super(props);
    this.state = {};
  }

  render() {
    let movieScrollList: any[] = [];
    let sortedList: Result[] = null;

    this.props.popularMovies
      ? ((sortedList = this.props.content.results.sort(
          (e: any, f: any) => f.popularity - e.popularity
        )),
        sortedList.forEach(movie => {
          if (
            new Date(movie.release_date).getFullYear() >=
            new Date().getFullYear()
          ) {
            movieScrollList.push(
              <ContentCard key={movie.id} isSerie={false} movie={movie} />
            );
          }
        }))
      : ((sortedList = this.props.content.results.sort(
          (e, f) => new Date(e.release_date) - new Date(f.release_date)
        )),
        sortedList.forEach(movie => {
          if (new Date(movie.release_date) >= new Date()) {
            movieScrollList.push(
              <ContentCard key={movie.id} isSerie={false} movie={movie} />
            );
          }
        }));

    return (
      <View style={{ marginBottom: "2%" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: "3%" }}>
          {this.props.title}
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {movieScrollList}
        </ScrollView>
      </View>
    );
  }
}

export default MovieScrollView;
