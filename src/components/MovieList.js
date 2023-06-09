import React from 'react';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux'
const MovieList = (props)=> {
    const { movies, displayFavorites, favorites } = props;
    let moviesToDisplay = movies;
    if(displayFavorites) {
        moviesToDisplay = movies.filter(movie => favorites.some(fav => fav.id === movie.id));
    }
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        moviesToDisplay.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies,
        displayFavorites: state.favorites.displayFavorites,
        favorites: state.favorites.favorites,
    }
}
export default connect(mapStateToProps)(MovieList);