import styled from 'styled-components';

export const DetailWrapper = styled.div`
	overflow: hidden;
	width: 620px;
	margin: 0 auto;
	padding-bottom: 100px;
`;

export const Header = styled.div`
	margin: 50px 0 20px 0;
	line-height: 44px;
	font-size: 34px;
	color: #333;
	font-weight: bold;
`;

export const Content = styled.div`
	color: #2f2f2f;
	img {
		width: 100%;
	}
	p {
		margin: 25px 0;
		font-size: 16px;
		line-height: 30px;
	}
	b {
		font-weight: bold;
	}
	.show-content {
        color: #2f2f2f;
        word-break: break-word!important;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
        p {
            margin: 0 0 25px
          }
    }
    
    .image-container {
        z-index: 100;
        position: relative;
        background-color: #eee;
        transition: background-color .1s linear;
        margin: 0 auto
    }
    .image-package {
        padding-bottom: 25px;
        width: 700px;
        margin-left: -40px;
        text-align: center;
    img{
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        border: 0;
        cursor: -webkit-zoom-in;
        transition: all .25s ease-in-out;
    }
    .image-caption {
        min-width: 20%;
        max-width: 80%;
        min-height: 22px;
        display: inline-block;
        padding: 10px;
        margin: 0 auto;
        border-bottom: 1px solid #d9d9d9;
        font-size: 14px;
        color: #969696;
        line-height: 1.7;
    }
  }
	.image-view {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
            display: block;
            transition: all .15s linear;
            z-index: 100;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1
        }
}
`;