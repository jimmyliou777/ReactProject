import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router';
import logo from '../reactjs.svg';
import reduxLogo from '../redux_logo.png';
import reduxSaga from '../Redux-Saga-Logo-Landscape.png';

import SwiperList from './SwiperList';
import SwiperComponent from './SwiperComponent';

class TopBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.swiper = {};
	}

	//before render
	componentWillMount() {
		console.log('componentWillMount');

	}

	//after render
	componentDidMount() {
		console.log('componentDidMount');
		this.swiper.topBar = new Swiper(`#${this.swiper_id}`, {
			loop: true,
			nextButton: `#${this.swiper_id} .swiper-button-next`,
            prevButton: `#${this.swiper_id} .swiper-button-prev`,
		});
	}

	//render html elements
	render() {
		this.swiper_id = 'swiper-topBar';
		const items = [{
			class: 'logo',
			src: logo
		}, {
			class: 'reduxLogo',
			src: reduxLogo
		}, {
			class: 'reduxSaga',
			src: reduxSaga
		}];
		const listItems = items.map((target) =>
			<SwiperList key={target.class}>
				<div className={`block a ${target.class}`}><Link to="/"><img className="icon" src={target.src} alt="" /></Link></div>
			</SwiperList>
		);
		return (
			<SwiperComponent id={this.swiper_id} hasBtn={true}>
			  {listItems}			  
			</SwiperComponent>
		);
	}
}

export default TopBar;