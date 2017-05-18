import React, {
	Component
} from 'react';
//import './Sample.css';

class Footer extends Component {
	constructor(props) {
		super(props);

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
		return (
			<div>
           <div className="block footer">
           <h4>Footer</h4><p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p></div>
     	</div>
		);
	}
}

export default Footer;