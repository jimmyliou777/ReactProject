import React, {
	Component
} from 'react';
import '../css/swiper.min.css';

const Controllers = {
  NextPreBtn: function() {
  	return (<div>
  		<div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>	  
  	</div>)
  },
};

class SwiperComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		console.log(this.props.id);
		this.id = this.props.id || '';
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
	// Slider main container
	render() {
		console.log('Controllers.NextPreBtn');
		return (
			<div id={this.id} className="swiper-container">
               <div className="swiper-wrapper">
                   {this.props.children}
               </div>
               <div className="swiper-pagination"></div>
               {this.props.hasBtn ? <Controllers.NextPreBtn /> : ""}
           </div>
		);
	}
}

export default SwiperComponent;