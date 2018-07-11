import {createActions } from 'redux-actions';

// 输出的变量需要采用驼峰结构，需要和type一一对应
// 网络都是异步，数据没有返回reducer就执行完了，所以网络数据不能再redux中处理
export const {
  // search,
    clearMainTabHomeBadge,
} = createActions(
    // {
    //     SEARCH: searchStr => ({
    //         searchStr
    //     })
    // },
    'CLEAR_MAIN_TAB_HOME_BADGE',
);