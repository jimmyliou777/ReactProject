//action
function Increment() {
	return {
		type: 'Increment'
	}
}

function Decrement() {
	return {
		type: 'Decrement'
	}
}

function Init() {
	return {
		type: 'Init'
	}
}

function Unmount() {
	return {
		type: 'Unmount'
	}
}

function Didmount() {
	return {
		type: 'Didmount'
	}
}

export {
	Increment,
	Decrement,
	Init,
	Unmount,
	Didmount,
};