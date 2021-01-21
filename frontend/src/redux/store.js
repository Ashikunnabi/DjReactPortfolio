import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './rootReducer';

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(reducer, applyMiddleware(thunkMiddleware))


export default store;