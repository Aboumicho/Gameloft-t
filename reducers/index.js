import { combineReducers } from 'redux';
import LikedCharacters from './LikedCharacters';

export default combineReducers({
    likedCharactersReducer: LikedCharacters
});