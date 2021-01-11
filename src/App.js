import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  loadState = () => {
    this.setState({ isLoading: false });
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // this.setState({ isLoading: false, movies: movies });
    this.setState({ movies: movies, isLoading: false });
    // console.log(movies);
  };

  componentDidMount() {
    // setTimeout(this.loadState, 1000);
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="loader">
        { isLoading 
          ? (<div class="loader">
            <span class="loader__text">Loading...</span>
          </div>)
          : (<div class="movies">
              { movies.map(movie => {
                // console.log(movie);
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                );})
              }
          </div>)
        }
      </section>
    );
  };
};

export default App;