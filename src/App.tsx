import * as React from 'react';
import styled from 'styled-components';
import './App.css';
import ButtonNextPrev from './components/ButtonNextPrev';
import Details from './components/Details';
import SideBar from './components/SlideShow';
import Title from './components/Title';

const DetailsButton = styled.div`
  border: 0;
  padding: 0;
  flex: 1;
  align-self: stretch;
  background: none;
  position: absolute;
  width: 100%;
  display: grid;
  grid-auto-rows: 80px;
  joverflow: hidden;
  top: calc(6rem + 10vh);
	right: 4rem;
	left: auto;
	background: none;
	color: inherit;
	width: auto;
  padding: 0;
	color: black;
`;

const JSONStyled = styled.div`
border: 0;
padding: 0;
flex: 1;
align-self: stretch;
background: none;
position: absolute;
width: 100%;
display: grid;
grid-auto-rows: 80px;
overflow: hidden;
top: calc(6rem + 20vh);
		right: 4rem;
		left: auto;
		background: none;
		color: inherit;
		width: auto;
    padding: 0;

		color: black;
`;

class App extends React.Component {
  public state = {
    index: 0,
    info: [
      {
        img: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/1.jpg?raw=true",
        title: "Fancy Hats",
        colors: ["white", "red", "black", "blue", "beige", "sky"],
        sizes: ["XL", "L", "M", "S"],
        price: 89,
        subTitle: "Pivot gnarly ho-ho drop in mute-air shoveit airwalk",
        smallImg: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/small/1.jpg?raw=true"
      },
      {
        img: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/2.jpg?raw=true",
        title: "Shirt Mania",
        price: 40,
        colors: ["white", "red", "black", "blue", "beige", "sky"],
        sizes: ["XL", "L", "M", "S"],
        subTitle: "Christ air pivot nosebone feeble quarter pipes",
        smallImg: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/small/2.jpg?raw=true"
      },
      {
        img: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/3.jpg?raw=true",
        title: "Flow Scarfs",
        colors: ["white", "red", "black", "blue", "beige", "sky"],
        sizes: ["XL", "L", "M", "S"],
        price: 27,
        subTitle: "Layback goofy footed transfer birdie Julien Stranger",
        smallImg: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/small/3.jpg?raw=true"
      }
    ],
    clickedJSON: false,
    clickedDetails: true,
    temp: null,
  }
  public componentDidMount() {
    this.setState({ temp: Object.assign({}, this.state.info) })
  }

  public render() {
    const { index, info, temp, clickedJSON, clickedDetails } = this.state;
    return (
      <main>
        <Title />
        <SideBar {...this.state.info[index]} />
        <ButtonNextPrev prevClick={this.prevClick} nextClick={this.nextClick} index={index} />
        {!clickedDetails ?
          <DetailsButton onClick={this.clickedDetails}>
            + details
        </DetailsButton>

          :
          <Details {...info[index]} onClose={this.clickedDetails} />
        }
        <JSONStyled>
          {!clickedJSON ?
            <div onClick={this.changeJSONClick}>
              Change JSON DATA
          </div>
            :
            <>
              <div onClick={this.changeJSONClick}>
                Close
              </div>
              <form onSubmit={this.submitJSONData}>
                <textarea
                  name="body"
                  onChange={this.changeJSONData}
                  value={JSON.stringify(temp, null, 2)} />
                <span onClick={this.submitJSONData} style={{ height: 40 }}>
                  Submit
                </span>
              </form>
            </>
          }
        </JSONStyled>
      </main>
    );
  }
  private changeJSONData = (e: any) => {
    const json = JSON.parse(e.target.value);
    this.setState({ temp: json })
  }

  private submitJSONData = (e: any) => {
    e.preventDefault();
    const obj = this.state.temp || {};
    const info = Array.from(Object.keys(obj), k => obj[k]);
    /*
    const info = Object.keys(obj).map((key) => {
      return [Number(key), obj[key]];
    });
    */
    if (info != null) {
      this.setState({ info })
    }
  }

  private clickedDetails = () => {
    this.setState({ clickedDetails: !this.state.clickedDetails })
  }

  private changeJSONClick = () => {
    this.setState({ clickedJSON: !this.state.clickedJSON })
  }

  private nextClick = () => {
    const { index, info } = this.state;
    if (index === info.length - 1) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: index + 1 })
    }
  }

  private prevClick = () => {
    const { index, info } = this.state;
    if (index === 0) {
      this.setState({ index: info.length - 1 })
    } else {
      this.setState({ index: index - 1 })
    }
  }
}

export default App;
