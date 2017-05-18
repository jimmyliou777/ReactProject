import {
	combineReducers,
	createStore
} from 'redux'


function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.text])
		default:
			console.log('init_ADD_TODO');
			return state
	}
}

function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			console.log('INCREMENT');
			return state + 1
		case 'DECREMENT':
			console.log('DECREMENT');
			return state - 1
		default:
			console.log('init_INCREMENT');
			return state
	}
}

const todoApp = combineReducers({
	todos,
	counter
});

let store = createStore(todoApp);

console.log(store.getState())
	// {
	//   counter: 0,
	//   todos: []
	// }

store.dispatch({
	type: 'ADD_TODO',
	text: 'Use Redux'
})
console.log(store.getState())
	// 	// {
	// 	//   counter: 0,
	// 	//   todos: [ 'Use Redux' ]
	// 	// }
	store.dispatch({
		type: 'INCREMENT'
	})

// console.log(store.getState())