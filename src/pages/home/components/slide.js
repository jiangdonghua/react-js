import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {SlideWrapper, SlideItem} from '../style';

class Slide extends PureComponent {
    render() {
        let setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            lazyLoad: true,
        };
        return (
            <SlideWrapper>
                <Slider {...setting}>
                    {
                        this.getBanner()
                    }
                </Slider>
            </SlideWrapper>
        )
    }

    getBanner() {
        return this.props.homeBanner.map((item) => {
            return <SlideItem key={item.get('id')}>
                <Link target="_blank" to={item.get('linkUrl')}><img src={item.get("imgUrl")} alt="540"/></Link>
            </SlideItem>
        })
    };
}

export default Slide;