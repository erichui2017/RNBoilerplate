import { handleActions, combineActions } from 'redux-actions';
import initialState from "../store/initialState";

const search = (state, { payload: { searchStr } }) => {  
  return {
    ...state
  };
}

const getSlideShow = state => { 
  return {
    ...state
  };
}

// const作用域问题，必须先声明再使用。
// 必须是与action type拼写一直的变量名，但是需要引入action和actiontype
export const reducer = handleActions (
  {
    SEARCH: search,
    GET_SLIDE_SHOW: getSlideShow
  },
  initialState
);