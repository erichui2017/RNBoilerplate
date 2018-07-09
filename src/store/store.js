
import {createStore, combineReducers, applyMiddleware} from 'redux';
// 移动端没必要用undo
// import undoable  from 'redux-undo';  
import {createLogger} from 'redux-logger';

import reducer from '../reducers';

let store;

// combineReducers({
//     reducer: undoable(reducer)
// })

// const reducer = undoable(reducer);

if(__DEV__){
    const logger = createLogger();
    const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
    store = createStoreWithMiddleware(reducer);
} else {   
    store = createStore(reducer);
}


export default store;