export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = movie => {
    return {
        type: ADD_MOVIE,
        payload: movie,
    };
}
export const toggleFavorites = () => {
    return({
    type: TOGGLE_FAVORITES
    })
}
