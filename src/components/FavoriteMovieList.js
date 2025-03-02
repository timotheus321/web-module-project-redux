import React from 'react';
import { toggleFavorites } from '../actions/favoritesActions';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const FavoriteMovieList = (props) => {
   
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites,
    }
}


export default connect(mapStateToProps)(FavoriteMovieList);