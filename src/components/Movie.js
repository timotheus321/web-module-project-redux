import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite, removeFavorite } from '../actions/favoritesActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const { movies, displayFavorites,favorites, deleteMovie, addFavorite, removeFavorite } = props;
    const movie = movies.find(movie=>movie.id===Number(id));

    const isFavorite = favorites.find(favorite => favorite.id === Number(id));
    
    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    }
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark" onClick={handleFavoriteClick}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
                            <span className="delete">
                                <input type="button" 
                            className="m-2 btn btn-danger" 
                            value="Delete"
                            onClick={() => {
                                props.deleteMovie(movie.id);
                                push('/movies')
                            }}/>
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
const mapStateToProps = state => {
    return {
        movies: state.movies.movies,
        displayFavorites: state.favorites.displayFavorites,
        favorites: state.favorites.favorites
    }
}
const mapDispatchToProps = { deleteMovie, addFavorite, removeFavorite}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);