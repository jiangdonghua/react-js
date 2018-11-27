import React,{PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {RecommendWrapper,RecommendItem} from '../style';
class Recommend extends PureComponent{
    render() {
        return(
           <RecommendWrapper>
               {
                   this.props.recommendList.map((item)=>{
                       return <Link key={item.get('id')} to={'/detail/'+item.get('id')}>
                           <RecommendItem imgUrl={item.get('imgUrl')} ></RecommendItem>
                       </Link>
                   })
               }
           </RecommendWrapper>
        )
    }
}

export default Recommend;