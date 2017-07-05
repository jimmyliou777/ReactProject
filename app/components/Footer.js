import React, { Component } from 'react';
//import './Sample.css';

class Footer extends Component {
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

    }

    //render html elements
    render() {
        return (
            <div>
           <div className="block footer">
           <h4>工作經歷</h4>
           <div>
           <div className="information">程式設計師 - 2013/03至今 - 亞卡西雅(UNT)</div>
           </div>
           <div>
           <div className="information">程式設計師 - 2011/04至今 - 華泰旅遊</div>
           </div>
           </div>
     	</div>
        );
    }
}

export default Footer;