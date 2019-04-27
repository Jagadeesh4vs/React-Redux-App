import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from '../src/reducers/rootReducer'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

// let count = 10
// const reducer = (state=count,action) =>{
//          if(action.type=='INC'){
//             return state=state+action.count
//         }
//         else if(action.type=='DEC'){
//             return state=state-action.count
//         }
//         else{
//             return state;
//         }
// }
// const store = createStore(reducer,applyMiddleware(logger))

// store.subscribe(()=>{
//     console.log('result is',store.getState())
// })
const store = createStore(rootReducer,applyMiddleware(logger));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
