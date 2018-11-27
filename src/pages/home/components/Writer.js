import React,{PureComponent} from 'react';
import { FindMore, WriterWrapper,WriterTop,WriterCont} from '../style';
// import * as actionCreators from "../store/actionCreators";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
class Writer extends PureComponent{
    render() {
        const {list}=this.props;
        return(
            <WriterWrapper>
                <WriterTop>
                    <span>推荐作者</span>
                    <a className='page-change'><i className='iconfont ic-search-change'>&#xe851;</i>换一批</a>
                </WriterTop>
                {
                    list.map((item)=>(
                        <WriterCont key={item.get('id')}>
                            <Link to={'/detail/'+item.get('id')} className='avatar-wrap'>
                                <img
                                    className='pic'
                                    src={item.get('avatar_source')} alt=""/>
                            </Link>
                            <a className='follow' state="0"><i className='iconfont '>&#xe601;</i>关注</a>
                            <Link to={'/detail/'+item.get('id')} className='name'>
                                {item.get('nickname')}
                            </Link>
                            <p className='desc'>写了{(item.get('total_wordage')/1000).toFixed(1)}k字 &nbsp;{(item.get('total_likes_count')/1000).toFixed(1)}k喜欢</p>
                        </WriterCont>
                    ))
                }
                <FindMore>查看全部<i className="iconfont">&#xe6a7;</i></FindMore>
            </WriterWrapper>
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','writerList'])
});


const mapDispatch=(dispatch)=>({
    changePage(){
        // dispatch(actionCreators.changePage())
    },
});

export default connect(mapState,mapDispatch)(Writer);