import React, {
	Component
} from 'react';

class ImageList extends Component {
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
			<div className="sblocks">
            <div className="main_blocks">
               <div className="sblock">
                 <img src="" alt="" />
                 <h5>標題一</h5>
               </div>
               <div className="sblock">
                 <img src="" alt="" />
                 <h5>標題二</h5>
               </div>
               <div className="sblock">
                 <img src="" alt="" />
                 <h5>標題三</h5>
               </div>
            </div>       
            </div>
		);
	}
}

export default ImageList;