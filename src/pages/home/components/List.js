import React,{PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {ListItem,ListInfo,LoadMore} from '../style';
import * as actionCreators from "../store/actionCreators";
import connect from "react-redux/es/connect/connect";

class List extends PureComponent{
    render() {
        const {list,page,getMoreList}=this.props;
        return(
            <div>
            {
                list.map((item)=>(
                    <Link key={item.get('id')} to={'/detail/'+item.get('id')}>
                        <ListItem>
                            <img
                                className='pic'
                                src={item.get('imgUrl')} alt=""/>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))
            }
            <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
});


const mapDispatch=(dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
});

export default connect(mapState,mapDispatch)(List);