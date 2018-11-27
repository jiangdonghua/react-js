import * as constants from './constants';
import axios from 'axios';
import {fromJS} from "immutable";

const getHomeList = (result) => ({
    type: constants.GET_HOME_LIST,
    homeBanner: result.homeBanner,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.users,
});

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
});

export const getHome = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;

            dispatch(getHomeList(result))
        }).catch(() => {
            console.log('error')
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        }).catch(() => {
            console.log('error')
        })
    }
};

export const toggleTopShow=(status)=>({
    type:constants.TOGGLE_SCROLL_TOP,
        status
});