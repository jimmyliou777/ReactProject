import React, {
	Component
} from 'react';
import './Sample.css';

class Sample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	//before render
	componentWillMount() {
		console.log('componentWillMount');

	}

	//after render
	componentDidMount() {
		console.log('componentDidMount');

	}

	//render html elements
	render() {
		return (<div className="Sample">

     	</div>);
	}
}

export default Sample;