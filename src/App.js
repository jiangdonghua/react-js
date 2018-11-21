/**
 * Created by Administrator on 2018/11/20.
 */
import React,{Component,Fragment} from 'react';
import Header from './common/header'
import {GlobalStyle} from './style'
import {GlobalIcon} from './statics/iconfont/iconfont'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle/>
                    <GlobalIcon/>
                    <Header/>
                </Fragment>
            </Provider>
        )
    }
}

export default App;