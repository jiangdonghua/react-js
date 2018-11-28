import * as constants from './constants';
import axios from 'axios';

const changeLogin=(status)=>({
    type:constants.CHANGE_LOGIN,
    status
});
const changeLogOut=(status)=>({
    type:constants.LOGOUT,
    status
});
export const login=(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            const result=res.data.data;
            if(result){
                dispatch(changeLogin(result.status))
            }
        }).catch(()=>{
            console.log('err')
        })
    }
};

export const logout=(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/logout.json?account='+account+'&password='+password).then((res)=>{
            const result=res.data.data;
            if(result){
                dispatch(changeLogOut(result.status))
            }

        }).catch(()=>{
            console.log('err')
        })
    }
};