//Reduce
const initialState = {
	text: 'Hello'
}

function myApp(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_TEXT':
			console.log('CHANGE_TEXT');
			return {
				text: state.text == 'Hello' ? 'Stack' : 'Hello'
			}
		case 'BUTTON_CLICK':
			console.log('BUTTON_CLICK');
			return {
				text: 'you just button click'
			}
		default:
			console.log('Hello');
			return {
				text: 'Hello'
			}
	}
}

export default myApp;