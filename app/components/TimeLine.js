import React, {
	Component
} from 'react';


class TimeLine extends Component {
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
		return (<div className="block timeline">
          <ul className="timeline_content">
          	<li className="dialog_wrapper">
          	  <div className="dialog">
                <h3 className="date_year">2011
                  <div className="decor_obj"></div>
                </h3>
                <ul>
                	<li>華泰旅遊</li>
                </ul>
          	  </div>
          	</li>
          	<li className="dialog_wrapper">
              <div className="dialog">
                <h3 className="date_year">2013
                  <div className="decor_obj"></div>
                </h3>
                <ul>
                	<li>亞卡西雅</li>
                </ul>
          	  </div>
          	</li>
          	<li className="dialog_wrapper">
          	  <div className="dialog">
                <h3 className="date_year">2017
                 <div className="decor_obj"></div>
                </h3>
                <ul>
                	<li>在職中~</li>
                </ul>
          	  </div>
          	</li>
          </ul>
     	</div>);
	}
}

export default TimeLine;