import React, {
	Component
} from 'react';
//import './Sample.css';

class Content1 extends Component {
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
		return (<div className="Sample">
           <div className="block b"><h4>B</h4><p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p></div>
  <div className="block c"><h4>C</h4><p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p></div>
  <div className="block d"><h4>D</h4><p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p></div>
  <div className="block e"><h4>E</h4><p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p></div>
  <div className="block f"><h4>F</h4><p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p></div>
  <div className="block g"><h4>G</h4><p>這室內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文這是內文</p></div>
     	</div>);
	}
}

export default Content1;