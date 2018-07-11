import { handleActions, combineActions } from 'redux-actions';
import initialState from "../store/initialState";

// 网络都是异步，数据没有返回reducer就执行完了，所以网络数据不能再redux中处理

// const search = (state, { payload: { searchStr } }) => {  
//   return {
//     ...state
//   };
// }

const clearMainTabHomeBadge = state => { 
  return {
    ...state,
    mainTabHomeBadge: 0
  };
}

// const作用域问题，必须先声明再使用。
// 必须是与action type拼写一直的变量名，但是需要引入action和actiontype
export const reducer = handleActions (
  {
    CLEAR_MAIN_TAB_HOME_BADGE: clearMainTabHomeBadge
  },
  initialState
);