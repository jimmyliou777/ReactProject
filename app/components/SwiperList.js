import React, {
	Component
} from 'react';

class SwiperList extends Component {
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
		return (
			<div className="swiper-slide">
              {this.props.children}
     	    </div>
		);
	}
}

export default SwiperList;