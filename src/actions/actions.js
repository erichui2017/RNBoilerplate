import {createActions } from 'redux-actions';

// 输出的变量需要采用驼峰结构，需要和type一一对应
export const {
    search,
    getSlideShow,
} = createActions({
        SEARCH: searchStr => ({
            searchStr
        })
    },
    'GET_SLIDE_SHOW',
);