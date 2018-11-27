import styled from 'styled-components';

export const HomeWrapper= styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft= styled.div`
  float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;
export const HomeRight= styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
	.TopicItem{
		float: left;
        height: 32px;
        line-height: 32px;
        margin-left: 18px;
        margin-bottom: 18px;
        padding-right: 10px;
        background: #f7f7f7;
        font-size: 14px;
        color: #000;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        .topic-pic {
            display: block;
            float: left;
            width: 32px;
            height: 32px;
            margin-right: 10px;
        }
	}
`;
export const ListItem= styled.div`
  overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;
export const ListInfo= styled.div`
  width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
		padding-right: 10px;
	}
`;
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;


export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
	margin-bottom: 6px;
`;
export const WriterWrapper = styled.div`
    position: relative;
	margin: 0 0 20px;
    text-align: left;
    list-style: none;
`;
export const WriterTop = styled.div`
	overflow: hidden;
	span{
	font-size: 14px;
	color: #969696;
	}
	.page-change{
	     float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
	}
	.ic-search-change{
        display: inline-block;
        line-height: 1;
        transition: .5s ease;
        font-size: 14px;
        margin-right: 2px;
	}
`;
export const WriterCont = styled.div`
    margin-top: 15px;
    line-height: 20px;
    box-sizing: border-box;
	.avatar-wrap{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
	}
	.follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
	}
	.name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
	}
	.desc{
	    margin: 0 0 10px;
	    margin-top: 2px;
        font-size: 12px;
        color: #969696;
        
	}
`;
export const FindMore = styled.div`
    position: absolute;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    text-align: center;
    box-sizing: border-box;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .ic-link:before {
    content: "\\E616";
}
`;
export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`;

export const SlideWrapper=styled.div`
    .slick-arrow{
      z-index:1;
    }
    .slick-prev{
      left: 25px;
    }
   .slick-next{
      right: 25px;
   }
   .slick-dots{
      bottom: 8px;    
      .slick-active{     
        button{
           &:before{
           color: #fff;
           }
        }
      }
   }
`;
export const SlideItem=styled.div`

    img{
        width: 100%;
        height: 270px;
        background-color: hsla(0,0%,71%,.2);
    }
   
`;