import * as React from 'react';
import styled from "styled-components";

const Message = styled.div`
position: relative;
	z-index: 100;
	display: none;
	padding: 1em;
	text-align: center;
	color: var(--color-bg);
	background: var(--color-text);
`;

const ContentFixed = styled.div`
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		min-height: 100vh;
		text-align: left;
        position: fixed;
		z-index: 10000;
		top: 0;
		left: 0;
		display: grid;
		align-content: space-between;
		width: 100%;
		height: 100vh;
		padding: 1.5rem 4rem 2rem;
		pointer-events: none;
		align-items: start;
		grid-template-columns: 50% 50%;
		grid-template-rows: auto auto auto;
		grid-template-areas: 'pageheader codropsheader'
							 '... ...'
                            'tagline category'
`;

const PageHeader = styled.div`
        grid-area: pageheader;
		align-self: start;
		justify-self: start;
		position: relative;
		display: flex;
		padding: 1.25rem 1.5rem 1.25rem 0;
        pointer-events: none;
        &:before {
		    content: '';
		    background: #000;
		    width: calc(100% + 4rem);
		    height: 100%;
		    position: absolute;
		    left: -4rem;
		    top: 0;
		    transform: translate3d(-100%,0,0) translate3d(2rem,0,0);
		    transition: transform 0.3s;
            pointer-events: auto;
        }
        &:hover:before {
            transform: translate3d(0,0,0); 
        }
        &:hover {
            color: #fff;
            pointer-events: auto;
            opacity: 1;
            transform: translate3d(0,0,0);
        }
        &:after {
            content: '';
            width: 17rem;
            height: 100%;
            position: absolute;
            left: -2rem;
            top: 0;
            pointer-events: auto;
        }
`;

const PageHeaderTitle = styled.h1`
font-size: 1rem;
    margin: 0
    transition: color 0.3s;
    &:hover {
		color: #fff;
	}
`;

const TitleInner = styled.span`
	position: relative;
	line-height: 1.25;
	margin: 0 0.5rem 0 0;
    padding: 0 1rem 0 0;
    &:after {
	    content: '';
	    right: 0;
	    width: 3px;
	    height: 1.25rem;
	    position: absolute;
    }
`;

const Tagline = styled.p`
    margin: 0;
    grid-area: tagline;
    -webkit-writing-mode: vertical-rl;
	writing-mode: vertical-rl;
    transform: rotate(180deg);
`;

const Category = styled.h4`
	margin: 0;
		grid-area: category;
		justify-self: end;
		align-self: end;
	font-weight: normal;
`;

export default () => (
    <>
        <Message>
            To see the box navigation please view on desktop
        </Message>
        <div className="content ">
            <ContentFixed>
                <PageHeader>
                    <PageHeaderTitle>
                        <TitleInner>
                            Matylda
                            </TitleInner>
                        <span style={{ position: 'relative' }} >man &amp; woman</span>
                    </PageHeaderTitle>
                </PageHeader>
                <Tagline>
                    Fine clothing since 1987
                </Tagline>
                <Category>
                    Spring / Summer 2019
                </Category>
            </ContentFixed>
        </div>
    </>
)