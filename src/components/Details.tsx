import * as React from 'react';
import styled from "styled-components";


const Details = styled.div`
    position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	display: grid;
	grid-auto-rows: 80px;
    overflow: hidden;
    pointer-events: auto;
    width: auto;
    grid-template-columns: 8rem 14rem 150px;
    grid-template-rows: 125px 125px 7rem 3.5rem;
`;

const Image = styled.div`
    display: block;
    grid-area: 1 / 3 / 3 / 4;
    max-width: 100%;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;

const Inner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
    transform: translate3d(100%,0,0);
    transform: matrix(1, 0, 0, 1, 0, 0);
`;

const ItemSizes = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const ItemCart = styled.div`
    grid-area: 3 / 3 / 4 / 4;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const ItemColors = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const ItemPrice = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;
const ItemClose = styled.div`
    grid-area: 4 / 3 / 5 / 4;
    transform: matrix(1, 0, 0, 1, 0, 0);
`;

const DetailsSize = styled.span`
	position: relative;
    cursor: pointer;
`;
const Cart = styled.button`
    border: 0;
    padding: 0;
    flex: 1;
    align-self: stretch;
    background: #000;
    color: #fff;
`
const Price = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
    transform: translate3d(100%,0,0);
    transform: matrix(1, 0, 0, 1, 0, 0);
background: #d42d2d;
color: #fff;
font-size: 1.25rem;
`;

const Grid = styled.div`
    display: grid;
	padding: 1rem;
    grid-template-columns: repeat(6,1fr);
    grid-template-columns: repeat(3,1.5rem);
    justify-content: space-around;
    background: #fff;
`;

const Color = styled.span`
width: 1.5rem;
	height: 1.5rem;
	overflow: hidden;
	color: transparent;
	border-radius: 50%;
	align-self: center;
    justify-self: center;
    cursor: pointer;
`;

export default class DetailsComp extends React.Component<any, {}> {

    public state = {
        selectedColor: "red",
        selectedSize: "M",
    }
    constructor(props: any) {
        super(props);
        this.selectSize = this.selectSize.bind(this);
    }
    public render() {
        const { selectedSize, selectedColor } = this.state;
        const { smallImg, price, colors, sizes } = this.props;
        return (
            <Details>
                <Image>
                    <Inner>
                        <img src={smallImg} alt="Some image" />
                    </Inner>
                </Image>
                <ItemSizes>
                    <Inner style={{ background: "#d4d4d4" }} >
                        {sizes.map((size: any, i: number) => {
                            const activeSize: React.CSSProperties = size === selectedSize ? {
                                width: '64px',
                                lineHeight: '64px',
                                borderRadius: '50%',
                                textAlign: "center",
                                fontSize: "16px",
                                border: '2px solid #333',
                            } : {};
                            return (
                                <DetailsSize key={i} onClick={() => this.selectSize(size)} style={{ ...activeSize }} >
                                    {size}
                                </DetailsSize>
                            );
                        })}
                    </Inner>
                </ItemSizes>
                <ItemCart>
                    <Inner>
                        <Cart>
                            <svg className="icon icon-cart" id="icon-cart" width="100%" height="100%">
                                <path d="M11 21c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z" />
                                <path d="M22 21c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z" />
                                <path d="M23.8 5.4c-0.2-0.3-0.5-0.4-0.8-0.4h-16.2l-0.8-4.2c-0.1-0.5-0.5-0.8-1-0.8h-4c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.2l0.8 4.2c0 0 0 0.1 0 0.1l1.7 8.3c0.3 1.4 1.5 2.4 2.9 2.4 0 0 0 0 0.1 0h9.7c1.5 0 2.7-1 3-2.4l1.6-8.4c0-0.3 0-0.6-0.2-0.8zM20.4 14.2c-0.1 0.5-0.5 0.8-1 0.8h-9.7c-0.5 0-0.9-0.3-1-0.8l-1.5-7.2h14.6l-1.4 7.2z" />
                            </svg>
                        </Cart>
                    </Inner>
                </ItemCart>
                <ItemColors>
                    <Grid>
                        {colors.map((color: any, i: number) => {
                            const activeSize: React.CSSProperties = color === selectedColor ? {
                                borderRadius: '50%',
                                textAlign: "center",
                                fontSize: "16px",
                                border: '2px solid #333',
                            } : {};
                            return (
                                <Color onClick={() => this.selectColor(color)} key={i} style={activeSize} className={`details__color--${color}`}>
                                    {color}
                                </Color>
                            )
                        })}
                    </Grid>
                </ItemColors>
                <ItemPrice>
                    <Price>
                        ${price}
                    </Price>
                </ItemPrice>
                <ItemClose>
                    <Inner>
                        <button onClick={this.props.onClose} className="action action--close">Close</button>
                    </Inner>
                </ItemClose>
            </Details>
        );
    }
    private selectSize = (selectedSize: string) => {
        this.setState({ selectedSize })
    }
    private selectColor = (selectedColor: string) => {
        this.setState({ selectedColor })
    }
}