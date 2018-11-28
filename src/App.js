/**
 * Created by Administrator on 2018/11/20.
 */
import React,{Component,Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {GlobalStyle} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable';
import store from './store';

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle/>
                    <GlobalIcon/>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail/:id' exact component={Detail}></Route>
                            <Route path='/login' exact component={Login}></Route>
                        </div>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
    }
}

export default App;