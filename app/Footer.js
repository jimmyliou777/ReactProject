import React, { Component } from 'react';

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

    render() {
        const divStyle = {
            width: '100%',
            height: 100,
            marginBottom: 50,
        };
        return (
            <div className="App-footer" style={divStyle}>
                <footer>
            <h1>工作經歷</h1>
            <p>Posted by: Hege Refsnes</p>
            <p>Contact information: <a href="mailto:someone@example.com">
               someone@example.com</a>.</p>
           </footer>
           </div>
        );
    }
}

export default Footer;