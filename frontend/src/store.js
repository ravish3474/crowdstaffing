import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { userSigninReducer } from './reducers/userReducers';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
  userSignin: userSigninReducer
})
//const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, initialState,    compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
export default store;