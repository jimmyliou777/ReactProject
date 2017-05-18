import {
	combineReducers
} from 'redux';

import {
	Counter
} from '../canvasState';
import {
	menuSet
} from '../menuState';
const todoApp = combineReducers({
	Counter,
	menuSet
})

export default todoApp;