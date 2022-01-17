import { createStore } from 'redux';
import favoritesReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(favoritesReducer, composeWithDevTools());

export default store;
