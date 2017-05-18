import React, {
	Component
} from 'react';
import SwiperList from './SwiperList';
import SwiperComponent from './SwiperComponent';
import ImageList from './ImageList';
import onePiece from '../images/one_piece.jpg';
//import './Sample.css';

class Intro extends Component {
	constructor(props) {
		super(props);
		this.swiper = {};
	}

	//before render
	componentWillMount() {
		console.log('componentWillMount');

	}

	//after render
	componentDidMount() {
		console.log(`componentDidMount-${'intro'}`);
		this.swiper.intro = new Swiper(`#${this.swiper_id}`, {
			pagination: '.swiper-pagination',
			slidesPerView: 3,
			paginationClickable: true,
			spaceBetween: 0
		});
	}

	//render html elements
	render() {
		this.swiper_id = 'swiper-intro';
		const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const listItems = items.map((number) =>
			<SwiperList key={number.toString()}>
			    <div className="sblock">
                 <img src={onePiece} alt="" />
		         <h5>{`標題${number.toString()}`}</h5>
               </div>	
			</SwiperList>
		);
		return (
			<div className="block intro">
               <SwiperComponent id={this.swiper_id}>
			      {listItems}
			   </SwiperComponent>
            </div>
		);
	}
}

export default Intro;