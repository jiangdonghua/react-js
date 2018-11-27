import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState=fromJS({
    homeBanner:[],
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    wPage:1,
    wTotalPage:1,
    writerList:[],
    showScroll:false
});
const changeHomeData=(state,action)=>{
    return state.merge({
        homeBanner: fromJS(action.homeBanner),
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
    })
};
const addArticleList=(state,action)=>{
    return state.merge({
        articleList:state.get('articleList').concat(action.list),
        articlePage:action.nextPage
    })
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case constants.GET_HOME_LIST :
            return changeHomeData(state,action);
        case constants.ADD_ARTICLE_LIST :
            return addArticleList(state,action);
        case constants.TOGGLE_SCROLL_TOP :
            return state.set('showScroll',action.status);
        default:
            return state;
    }
}

