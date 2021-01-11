import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state={
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
    this.setState({ movies:movies, isLoading: false });
    // this.setState({ isLoading: false, movies: movies });
    // console.log(movies);
  };

  componentDidMount(){
    // setTimeout(this.loadState, 1000);
    this.getMovies();
  };

  render(){
    const { isLoading, movies } = this.state;
    return (
      <div> 
        { isLoading ? "Loading...": movies.map( movie => {
          console.log(movie);
          return (
            <Movie
              key={ movie.id }
              id={ movie.id }
              year={ movie.year }
              title={ movie.title }
              summary={ movie.summary }
              poster={ movie.medium_cover_image }
            />
        );})        
        }
      </div>
    );
  };
};

export default App;