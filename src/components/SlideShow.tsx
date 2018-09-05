import * as React from 'react';
import styled from "styled-components";

const SlideShow = styled.div`
    position: relative;
	width: 100%;
    margin-top: 1rem;
    overflow: hidden;
    margin: 0;
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.4s;
    }
`;

const Slide = styled.div`
    width: 100%;
	height: 50px;
	overflow-x: hidden;
    pointer-events: none;
    height: 100vh;
`;

const SlideWrap = styled.div`
    width: 100%;
	overflow: hidden;
    position: relative;
	height: 100%;
    position: absolute;
`;

const SlideImage = styled.div`
    width: 100%;
	height: 100%;
	background-color: white;
	background-size: cover;
	background-position: 50% 50%;
	position: absolute;
    pointer-events: none;
    background-position: 50% 0%;
`;

const SlideTitleWrap = styled.div`
	padding: 2rem 1rem 0;
	text-align: center;
	position: absolute;
	width: 100%;
	height: 100%;
    padding: calc(6rem + 10vh) 0 0 4rem;
	text-align: left;
`;

const SlideTitle = styled.h3`
    margin: 0;
	line-height: 0.9;
	white-space: pre;
	font-size: 4.5vw;
	display: inline-block;
`;

const SlideSubtitle = styled.h4`
    font-size: 1.15rem;
    font-weight: normal;
    margin: 1rem 0 0 0.2rem;
	max-width: 300px;
`;

export default ({ title, subTitle, img }: { title: string, subTitle: string, img: string }) => (
    <SlideShow>
        <Slide>
            <SlideWrap>
                <SlideImage style={{ backgroundImage: `url(${img})` }} />
                <SlideTitleWrap>
                    <SlideTitle>
                        {title}
                    </SlideTitle>
                    <SlideSubtitle>
                        {subTitle}
                    </SlideSubtitle>
                </SlideTitleWrap>
            </SlideWrap>
        </Slide>
    </SlideShow>
);