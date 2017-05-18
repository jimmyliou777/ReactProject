//Reduce
const initialState = {
	inClass: false,
	height: 0
}


function menuSet(state = initialState, action) {
	switch (action.type) {
		case 'addClass':
			return {
				inClass: true,
				height: action.height
			}
		case 'removeClass':
			return {
				inClass: false,
				height: action.height
			}
		default:
			//console.log('initChangeClass');
			return {
				inClass: state.inClass,
				height: state.height
			}
	}
}


export {
	menuSet
};