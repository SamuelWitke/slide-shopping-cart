import * as React from 'react';
import './App.css';
import ButtonNextPrev from './components/ButtonNextPrev';
import Details from './components/Details';
import SideBar from './components/SlideShow';
import Title from './components/Title';

class App extends React.Component {
  public state = {
    index: 0,
    info: [
      {
        img: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/1.jpg?raw=true",
        title: "Fancy Hats",
        subTitle: "Pivot gnarly ho-ho drop in mute-air shoveit airwalk"
      },
      {
        img: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/2.jpg?raw=true",
        title: "Shirt Mania",
        subTitle: "Christ air pivot nosebone feeble quarter pipes"

      },
      {
        img: "https://github.com/codrops/SlideOutBoxMenu/blob/master/img/3.jpg?raw=true",
        title: "Flow Scarfs",
        subTitle: "Layback goofy footed transfer birdie Julien Stranger",
      }
    ],
    clickedDetails: false
  }

  public render() {
    const { index, clickedDetails } = this.state;
    return (
      <div>
        <main>
          <Title />
          <SideBar {...this.state.info[index]} />
          <ButtonNextPrev prevClick={this.prevClick} nextClick={this.nextClick} index={index} />
          {!clickedDetails ?
            <button onClick={this.clickedDetails} className="action action--details">+ details</button>
            :
            <Details onClose={this.clickedDetails} />
          }
        </main>
      </div >
    );
  }

  private clickedDetails = () => {
    this.setState({ clickedDetails: !this.state.clickedDetails })
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
