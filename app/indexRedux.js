import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'; //fix es6 syntax 例:Generator
import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux';
import {
	Provider
} from 'react-redux';
import reducers from './stores/combineReducers/reducers';
import App from './AppRedux';
import Canvas from './canvas/CanvasRedux';
import Content1 from './components/Content1';
import Intro from './components/Intro';
import d3View from './components/d3View';
import FetchApp from './fetchReact';

import {
	helloSaga,
	watchIncrementAsync
} from './sagas';

import {
	browserHistory,
	Router,
	Route,
	Link,
	IndexRoute,
	hashHistory,
} from 'react-router';
import {
	syncHistoryWithStore,
	routerReducer
} from 'react-router-redux';

//The polyfill must be imported before redux-saga
import createSagaMiddleware from 'redux-saga'

// import {
// 	createDevTools
// } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'


const logger = store => next => action => {
	console.log('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	return result
}

const sagaMiddleware = createSagaMiddleware();

// add modules <DevTools />
// const DevTools = createDevTools(
// 	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
//     <LogMonitor theme="tomorrow" preserveScrollTop={false} />
//   </DockMonitor>
// )

// mount it on the Store
let store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware, logger)
	//DevTools.instrument(),
	//applyMiddleware(logger)
);

sagaMiddleware.run(helloSaga);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)
	//console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>   
	    <div>
	    	<Router history={history}>
	      <Route path="/" component={App}>
	        <IndexRoute component={Intro} />
	        <Route path="canvas" component={Canvas} />
	        <Route path="content" component={Content1} />
	        <Route path="d3" component={d3View} />
	        <Route path="memList" component={FetchApp} />
	      </Route>
	    </Router> 	    
	    </div>    
    </Provider>, document.getElementById('app')
);