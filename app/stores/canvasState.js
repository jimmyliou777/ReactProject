//Reduce
const initialState = {
	index: 0,
	unmount: false,
}


function Counter(state = initialState, action) {
	switch (action.type) {
		case 'Increment':
			//console.log('Increment__');
			return {
				index: state.index + 1
			}
		case 'Decrement':
			return {
				index: state.index - 1
			}
		case 'Init':
			return {
				index: 0
			}
		default:
			//console.log('initCounter');
			return {
				index: state.index
			}
	}
}

function canvasUnmount(state = initialState, action) {
	switch (action.type) {
		case 'Unmount':
			return {
				unmount: true
			}
		case 'Didmount':
			return {
				unmount: false
			}
		default:
			return {
				unmount: state.unmount
			}
	}
}

export {
	Counter,
	canvasUnmount
};