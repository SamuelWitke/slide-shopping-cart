import * as React from 'react';
import './App.css';
import ButtonNextPrev from './components/ButtonNextPrev';
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
    ]
  }

  public nextClick = () => {
    const { index, info } = this.state;
    if (index === info.length - 1) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: index + 1 })
    }
  }

  public prevClick = () => {
    const { index, info } = this.state;
    if (index === 0) {
      this.setState({ index: info.length - 1 })
    } else {
      this.setState({ index: index - 1 })
    }
  }

  public render() {
    const { index } = this.state;
    return (
      <div>
        <main>
          <Title />
          <SideBar {...this.state.info[index]} />
          <ButtonNextPrev prevClick={this.prevClick} nextClick={this.nextClick} index={index} />
          <button className="action action--details">+ details</button>
          {/* details */}
          <div className="details-wrap">
            <div className="details">
              <div className="details__item details__item-img" data-direction="ttb">
                <div className="details__inner">
                  <img src="img/small/1.jpg" alt="Some image" />
                </div>
              </div>
              <div className="details__item details__item-sizes">
                <div className="details__inner details__inner--sizes">
                  <span className="details__size">XL</span>
                  <span className="details__size">L</span>
                  <span className="details__size details__size--selected">M</span>
                  <span className="details__size">S</span>
                </div>
              </div>
              <div className="details__item details__item--addtocart" data-direction="ttb">
                <div className="details__inner">
                  <button className="action action--addtocart">
                    <svg className="icon icon--cart"><use xlinkHref="#icon-cart" /></svg>
                  </button>
                </div>
              </div>
              <div className="details__item details__item-colors" data-direction="ttb">
                <div className="details__inner details__inner--grid details__inner--colors">
                  <span className="details__color details__color--white">White</span>
                  <span className="details__color details__color--red">Red</span>
                  <span className="details__color details__color--black">Black</span>
                  <span className="details__color details__color--blue">Blue</span>
                  <span className="details__color details__color--beige">Beige</span>
                  <span className="details__color details__color--sky">Sky</span>
                </div>
              </div>
              <div className="details__item details__item-price">
                <div className="details__inner details__inner--price">$89</div>
              </div>
              <div className="details__item details__item--close" data-direction="ttb">
                <div className="details__inner">
                  <button className="action action--close">Close</button>
                </div>
              </div>
            </div>{/* /details */}
            <div className="details">
              <div className="details__item details__item-img" data-direction="ttb">
                <div className="details__inner">
                  <img src="img/small/2.jpg" alt="Some image" />
                </div>
              </div>
              <div className="details__item details__item-sizes">
                <div className="details__inner details__inner--sizes">
                  <span className="details__size">XL</span>
                  <span className="details__size">L</span>
                  <span className="details__size details__size--selected">M</span>
                  <span className="details__size">S</span>
                </div>
              </div>
              <div className="details__item details__item--addtocart" data-direction="ttb">
                <div className="details__inner">
                  <button className="action action--addtocart">
                    <svg className="icon icon--cart"><use xlinkHref="#icon-cart" /></svg>
                  </button>
                </div>
              </div>
              <div className="details__item details__item-colors" data-direction="ttb">
                <div className="details__inner details__inner--grid details__inner--colors">
                  <span className="details__color details__color--white">White</span>
                  <span className="details__color details__color--red">Red</span>
                  <span className="details__color details__color--black">Black</span>
                  <span className="details__color details__color--blue">Blue</span>
                  <span className="details__color details__color--beige">Beige</span>
                  <span className="details__color details__color--sky">Sky</span>
                </div>
              </div>
              <div className="details__item details__item-price">
                <div className="details__inner details__inner--price">$119</div>
              </div>
              <div className="details__item details__item--close" data-direction="ttb">
                <div className="details__inner">
                  <button className="action action--close">Close</button>
                </div>
              </div>
            </div>{/* /details */}
            <div className="details">
              <div className="details__item details__item-img" data-direction="ttb">
                <div className="details__inner">
                  <img src="img/small/3.jpg" alt="Some image" />
                </div>
              </div>
              <div className="details__item details__item-sizes">
                <div className="details__inner details__inner--sizes">
                  <span className="details__size">XL</span>
                  <span className="details__size">L</span>
                  <span className="details__size details__size--selected">M</span>
                  <span className="details__size">S</span>
                </div>
              </div>
              <div className="details__item details__item--addtocart" data-direction="ttb">
                <div className="details__inner">
                  <button className="action action--addtocart">
                    <svg className="icon icon--cart"><use xlinkHref="#icon-cart" /></svg>
                  </button>
                </div>
              </div>
              <div className="details__item details__item-colors" data-direction="ttb">
                <div className="details__inner details__inner--grid details__inner--colors">
                  <span className="details__color details__color--white">White</span>
                  <span className="details__color details__color--red">Red</span>
                  <span className="details__color details__color--black">Black</span>
                  <span className="details__color details__color--blue">Blue</span>
                  <span className="details__color details__color--beige">Beige</span>
                  <span className="details__color details__color--sky">Sky</span>
                </div>
              </div>
              <div className="details__item details__item-price">
                <div className="details__inner details__inner--price">$65</div>
              </div>
              <div className="details__item details__item--close" data-direction="ttb">
                <div className="details__inner">
                  <button className="action action--close">Close</button>
                </div>
              </div>
            </div>{/* /details */}
            <div className="details">
              <div className="details__item details__item-img" data-direction="ttb">
                <div className="details__inner">
                  <img src="img/small/4.jpg" alt="Some image" />
                </div>
              </div>
              <div className="details__item details__item-sizes">
                <div className="details__inner details__inner--sizes">
                  <span className="details__size">XL</span>
                  <span className="details__size">L</span>
                  <span className="details__size details__size--selected">M</span>
                  <span className="details__size">S</span>
                </div>
              </div>
              <div className="details__item details__item--addtocart" data-direction="ttb">
                <div className="details__inner">
                  <button className="action action--addtocart">
                    <svg className="icon icon--cart"><use xlinkHref="#icon-cart" /></svg>
                  </button>
                </div>
              </div>
              <div className="details__item details__item-colors" data-direction="ttb">
                <div className="details__inner details__inner--grid details__inner--colors">
                  <span className="details__color details__color--white">White</span>
                  <span className="details__color details__color--red">Red</span>
                  <span className="details__color details__color--black">Black</span>
                  <span className="details__color details__color--blue">Blue</span>
                  <span className="details__color details__color--beige">Beige</span>
                  <span className="details__color details__color--sky">Sky</span>
                </div>
              </div>
              <div className="details__item details__item-price">
                <div className="details__inner details__inner--price">$99</div>
              </div>
              <div className="details__item details__item--close" data-direction="ttb">
                <div className="details__inner">
                  <button className="action action--close">Close</button>
                </div>
              </div>
            </div>{/* /details */}
          </div>
        </main>
      </div >
    );
  }
}

export default App;
