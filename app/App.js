import React, {Component} from 'react';
//import logo from './logo.svg';
import './RWD.css';
import classNames from 'classnames';
import Canvas from './Canvas';
//import Footer from './Footer'; import LeftSlideBar from './LeftSlideBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this
      .handleClick
      .bind(this);
    this.state = {
      focused: false
    }

  }

  handleClick(e) {
    if (this.state.focused) {
      this.leftMenu.style.height = '0px';
      this.setState({focused: false})
    } else {
      this.leftMenu.style.height = this._innerHeight + 'px';
      this.setState({focused: true})
    }
  }

  //before render
  componentWillMount() {
    console.log('componentWillMount');

  }

  //after render
  componentDidMount() {
    this.content = this.refs.content;
    //console.log(this.refs.leftMenu);
    this.leftMenu = this.refs.leftMenu;
    //const dleftMenu = document.getElementById("leftMenu");
    this._innerHeight = this.content.offsetHeight;
    console.log('componentDidMount');
    console.log(this._innerHeight);
  }

  render() {
    let liClasses = classNames({'leftMenu': true, 'navbar-collapse': true, 'in': this.state.focused});
    return (
      <div className="container">
        <div id="btn" onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="block a">
          <h4>RWD</h4><img className="icon" src="https://hahow.in/assets/images/logo.svg" alt=""/></div>
        <div
          id="leftMenu"
          className={liClasses}
          ref="leftMenu"
          style={{
          height: 0
        }}>
          <ul id="content" ref="content">
            <li>MENU</li>
            <li>選單一</li>
            <li>選單二</li>
          </ul>
        </div>
        <div className="block intro">
          <div className="sblocks">
            <div className="sblock">
              <img src="" alt=""/>
              <h5>標題一</h5>
            </div>
            <div className="sblock">
              <img src="" alt=""/>
              <h5>標題二</h5>
            </div>
            <div className="sblock">
              <img src="" alt=""/>
              <h5>標題三</h5>
            </div>
          </div>
        </div>
        <div className="block canvasbBlock">
          <Canvas/>
        </div>
        <div className="block b">
          <h4>B</h4>
          <p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p>
        </div>
        <div className="block c">
          <h4>C</h4>
          <p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p>
        </div>
        <div className="block d">
          <h4>D</h4>
          <p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p>
        </div>
        <div className="block e">
          <h4>E</h4>
          <p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p>
        </div>
        <div className="block f">
          <h4>F</h4>
          <p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p>
        </div>
        <div className="block g">
          <h4>G</h4>
          <p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p>
        </div>
      </div>
    );
  }
}

export default App;