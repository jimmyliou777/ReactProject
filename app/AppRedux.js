import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeTodo, addTodo} from './actions/menuAction';
import {Unmount, Didmount} from './actions/canvasAction';
import {browserHistory, Link, hashHistory} from 'react-router';

// import './RWD.css';
import './css/flat-ui/dist/css/flat-ui.css';
import './css/flat-ui/docs/assets/css/demo.css';
import './css/App.sass';
//import './css/App.sass';

import classNames from 'classnames';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Swiper from 'swiper';

import AppNav from './AppNav';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

import loadingImg from './images/loading.gif';
// import LeftSlideBar from './LeftSlideBar'; import './index.css'; 引入
// react-tap-event-plugin 避免 material-ui onTouchTap event 會遇到的問題 Needed for
// onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this
            .handleClick
            .bind(this);
        this.swiper = {};
        this._innerHeight = 0;
        this.state = {
            height: 0,
            loadingState: 'none',
            left: '100%'
        }
    }

    handleClick(e, path) {
        this.setState({loadingState: 'block', left: 0});
        this
            .props
            .actions
            .removeClass(0);
        setTimeout(() => {
            hashHistory.push(path);
            this.setState({loadingState: 'none', left: '100%'})
        }, 1000)

        if (path !== '/canvas') {
            this
                .props
                .actions
                .Unmount();
        } else {
            this
                .props
                .actions
                .Didmount();
        }
    }

    //before render
    componentWillMount() {
        console.log('componentWillMount');

    }

    //after render
    componentDidMount() {
        this.content = this.refs.content;
        this.leftMenu = this.refs.leftMenu;
        this._innerHeight = this.content.offsetHeight;
        //this.swiper.intro = new Swiper('.swiper-container');
        this.setState({height: this.content.offsetHeight});
        //console.log(`this.state.height:${this.state.height}`);
    }

    render() {
        let liClasses = classNames({'leftMenu': true, 'navbar_collapse': true, 'in': this.props.inClass});
        let loadingStyle = {
            backgroundColor: '#000',
            width: '100%',
            height: '100%',
            opacity: 0.5,
            position: 'absolute',
            left: this.state.left,
            top: 0,
            zIndex: 1000,
            transition: '1.5s',
            display: this.state.loadingState
        };
        let LoadImage = {
            position: 'absolute',
            left: '25%',
            top: '10%',
            zIndex: 1000,
            display: 'block'
        };
        // console.log(`this.state.height-render:${this.state.height}`);
        // 傳遞dispatch作為props const {   dispatch } = this.props;
        return (
            <div id="app_main">
                <MuiThemeProvider>
                    <AppNav
                        menuState={this.props.inClass}
                        height={this.state.height}
                        onTodoAdd={height => this
                        .props
                        .actions
                        .addClass(height)}
                        onTodoRemove={height => this
                        .props
                        .actions
                        .removeClass(height)}/>
                </MuiThemeProvider>
                <div
                    id="leftMenu"
                    className={liClasses}
                    ref="leftMenu"
                    style={{
                    height: this.props.height
                }}>
                    <ul id="content" ref="content">
                        <li>
                            <a onClick={(e) => this.handleClick(e, '/')}>About</a>
                        </li>
                        <li>
                            <a onClick={(e) => this.handleClick(e, '/content')}>Skill</a>
                        </li>
                        <li>
                            <a onClick={(e) => this.handleClick(e, '/timeline')}>timeline</a>
                        </li>
                        <li>
                            <a onClick={(e) => this.handleClick(e, '/canvas')}>CanvasGame</a>
                        </li>
                        <li>
                            <a onClick={(e) => this.handleClick(e, '/d3')}>d3View</a>
                        </li>
                        <li>
                            <a onClick={(e) => this.handleClick(e, '/memList')}>fetchJsonData</a>
                        </li>
                    </ul>
                </div>
                <div style={{
                    position: 'relative'
                }}>
                    {this.props.children
}
                    <Footer/>
                    <div className="loading" style={loadingStyle}></div>
                </div>
            </div>
        );
    }
}

//只專注特定屬性變化
function mapStateToProps(state) {
    return {inClass: state.menuSet.inClass, height: state.menuSet.height, unmount: state.canvasUnmount.unmount}
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件 == store.dispatch
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            addClass: addTodo,
            removeClass: removeTodo,
            Unmount: Unmount,
            Didmount: Didmount
        }, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;