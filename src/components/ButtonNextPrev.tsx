import * as React from 'react';
import styled from "styled-components";

const BoxNav = styled.nav`
    position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	z-index: 1000;
    width: 100%;
    left: auto;
	right: 50vw;
	width: auto;
`;

const Item = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--color-nav-bg);
	border: 0;
	height: 4rem;
    flex: 1;
    width: 10vw;
	height: 12vw;
    flex: none;
    &:focus {
	    outline: none;
    }
`;

const Label = styled.div`
    padding: 0 0.5rem;
	font-size: 1.15rem;
    position: relative;
    &:before {
	    content: '';
	    position: absolute;
	    right: 100%;
	    top: 0;
	    width: 2px;
	    height: 1.45rem;
	    background: #000;
	    transform: rotate(22.5deg);
    }
`;

const Next = styled.svg`
    display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
`;

const Prev = styled.svg`
    display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
	transform: rotate(180deg);
`;

export default ({ prevClick, nextClick, index }: { prevClick: () => void, nextClick: () => void, index: number }) => (
    <BoxNav>
        <Item onClick={prevClick}>
            <Next>
                <path d="M15.45 2.8L12.65 0l-12 12 12 12 2.8-2.8-9.2-9.2z" />
            </Next>
        </Item>
        <Item>
            <Label>
                <span>{index + 1}</span>
            </Label>
        </Item>
        <Item onClick={nextClick}>
            <Prev>
                <path d="M15.45 2.8L12.65 0l-12 12 12 12 2.8-2.8-9.2-9.2z" />
            </Prev>
        </Item>
    </BoxNav>
)