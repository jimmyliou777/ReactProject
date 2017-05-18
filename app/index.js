import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './index.css';
import AppNav from './AppNav'
// 引入 react-tap-event-plugin 避免 material-ui onTouchTap event 會遇到的問題
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
ReactDOM.render(
	<div>
    <MuiThemeProvider>
	  <AppNav />   
    </MuiThemeProvider>
    <App />
	</div>,
	document.getElementById('app')
);