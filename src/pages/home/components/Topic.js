import React, {PureComponent} from 'react';
import {TopicWrapper} from '../style';
import {Link} from 'react-router-dom';
class Topic extends PureComponent {
    render() {
        const {topicList} = this.props;
        return (
            <TopicWrapper>
                {
                topicList.map((item)=>(
                <Link key={item.get('id')} to={'/detail/'+item.get('id')} className='TopicItem'>
                    <img src={item.get('imgUrl')} className='topic-pic' alt=""/>
                    {item.get('title')}
                </Link>
                ))
                }
            </TopicWrapper>
        )
    }
}
export default Topic;