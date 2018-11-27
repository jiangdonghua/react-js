import React,{PureComponent,Fragment} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Slider from './components/slide';
import {BackTop} from './style';

import {
    HomeWrapper,HomeLeft,HomeRight
} from './style';
import * as actionCreators from "./store/actionCreators";

//Component改成PureComponent，实现各组件的shouldComponentUpdate 但需和immutable配合使用
//a换成Link
class Home extends PureComponent{
    render() {
          const {topicList,recommendList,homeBanner,showScroll} =this.props;
        return(
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <Slider homeBanner={homeBanner}/>
                        <Topic topicList={topicList}/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend recommendList={recommendList}/>
                        <Writer/>
                    </HomeRight>
                    {showScroll?<BackTop onClick={this.handleScrollTop}><i className='iconfont dd'>&#xe614;</i>顶部</BackTop>:null}
                </HomeWrapper>
            </Fragment>

        )
    }
    componentDidMount() {
        this.props.getHome();
        this.bindEvents();
    }
    componentWillMount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    handleScrollTop(){
        window.scrollTo(0,0)
    }
}

const mapState=(state)=>({
    homeBanner:state.getIn(['home','homeBanner']),
    topicList:state.getIn(['home','topicList']),
    recommendList:state.getIn(['home','recommendList']),
    showScroll:state.getIn(['home','showScroll']),
});


const mapDispatch=(dispatch)=>({
    getHome(){
        dispatch(actionCreators.getHome())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>200){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});



export default connect(mapState,mapDispatch)(Home);