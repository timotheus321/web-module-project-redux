import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoriteReducer';

export default combineReducers({
    movies: movieReducer,
    favorites: favoritesReducer,
});
