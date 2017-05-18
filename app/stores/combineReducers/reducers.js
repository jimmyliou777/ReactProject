import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';
import {
	Counter,
	canvasUnmount
} from '../canvasState';
import {
	menuSet
} from '../menuState';

const reducers = combineReducers({
	Counter,
	canvasUnmount,
	menuSet,
	routing: routerReducer
})

export default reducers;