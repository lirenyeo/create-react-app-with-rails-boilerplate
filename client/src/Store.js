import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import * as reducers from './ducks/index';

console.log(reducers)

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}