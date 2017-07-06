import React, { Component } from 'react';
//import './Sample.css';
import jimmyImg from '../images/jimmy.jpg';

class Main extends Component {
    constructor(props) {
        super(props);

    }

    //before render
    componentWillMount() {
        console.log('componentWillMount');

    }

    //after render
    componentDidMount() {
        console.log('componentDidMount');
        const showList = {
            'h1': 500,
            'h3': 1000,
            'p': 1500,
        }
        // window.setTimeout(function() {
        //     document.querySelector('#main h1').classList.add("show");
        // }, 1000);

        for (let index in showList) {
            window.setTimeout(() => {
                document.querySelector('#main ' + index).classList.add("show");
            }, showList[index]);
        }
    }

    //render html elements
    render() {
        return (
            <div>
           <div id="main" className="main">
              <img src={jimmyImg} alt="" />
              <h1><b>劉岩沛(Jimmy)</b></h1>
              <h3>jimmyliou777@gmail.com  •  0986-907717  •  台灣，新北市</h3>
              <p>Hi 我是劉岩沛，一名程式設計師，從事前後端網頁開發已有六年經驗，我正在尋找前端工程師的工作機會。熱愛研究開放原始碼的新技術，平常也研究一些HTML5網頁動畫，</p>
           </div>
     	</div>
        );
    }
}

export default Main;