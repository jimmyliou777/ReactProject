import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class AppNav extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    //before render
    componentWillMount() {
        console.log('componentWillMount');

    }

    //after render
    componentDidMount() {
        console.log('componentDidMount');

    }

    handleClick(e) {
        if (this.props.menuState) {
            this.props.onTodoRemove(0);
        } else {
            this.props.onTodoAdd(this.props.height);
        }

    }
    //render html elements
    render() {
        return (<div>
         <AppBar
            title="Jimmy Blog"
            onLeftIconButtonTouchTap={this.handleClick}
            />
        </div>);
    }
}



export default AppNav;