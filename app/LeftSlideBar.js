import React, {
	Component
} from 'react';
import './LeftSlideBar.css';

class LeftSlideBar extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			count: 0,
			slide: false,
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

	handleClick(e) {
		if (this.control !== null) {
			let slideClass = this.state.slide;
			if (slideClass) {
				this.control.classList.remove("slide");
				slideClass = false;
			} else {
				this.control.classList.add("slide");
				slideClass = true;
			}
			this.setState({
				slide: slideClass
			});
		}
	}

	render() {
		return (<div className="LeftSlideBar">
     		   <div id="control" ref={(ref) => this.control = ref}>
     		     <h1>LeftSlideBar</h1>
     		     <p>React Bar</p>
     		     <div id="btn" onClick={this.handleClick}>
                   <span></span>
                   <span></span>
                   <span></span>
     		     </div>
     		   </div>
     		   
     	</div>);
	}

}
export default LeftSlideBar;