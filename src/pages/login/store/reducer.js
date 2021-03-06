import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState=fromJS({
    loginStatus:false
});


export default (state=defaultState,action)=>{
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('loginStatus',action.status);
        case constants.LOGOUT:
            return state.set('loginStatus',action.status);
        default:
            return state;
    }
}

