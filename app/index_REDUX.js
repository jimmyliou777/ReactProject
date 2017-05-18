import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
import {
	createStore,
	bindActionCreators
} from 'redux';
import {
	Provider,
	connect
} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import state from './stores/state';

import {
	changeText,
	buttonClick
} from './actions/action';

let store = createStore(state);


//compoent:Hello,Change,App
class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		this.props.actions.changeText();
	}
	render() {
		return (
			<h1 onClick={this.handleClick}>{this.props.text}</h1>
		);
	}
}

class Change extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.actions.buttonClick();
	}

	render() {
		return (
			<button onClick={this.handleClick}>change</button>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//actions和text这两个props在第5步中会解释
		//es6 解构赋值 
		//example:let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
		//x // 1
		//y // 2
		//z // { a: 3, b: 4 }
		const {
			actions,
			text
		} = this.props;
		return (
			<div>
				<Hello actions={actions} text={text} />
				<Change actions={actions} />
			</div>
		);
	}
}

//mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
//由于我们这个应用太小，只有一个属性，所以只有text这个字段。
function mapStateToProps(state) {
	return {
		text: state.text
	}
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({
			changeText: changeText,
			buttonClick: buttonClick
		}, dispatch)

	}
}

//这里实际上给了App两个props：text和actions，即第4步中的那段注释
App = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
	<div>
		<Provider store={store}>
        <App />
    </Provider>
	</div>,
	document.getElementById('app')
);