import React, {
	Component
} from 'react';
import * as d3 from "d3";

class d3View extends Component {
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
		// const scale = 1.5;
		// let d3svg = d3.select('#d3block').append("svg").attr('width', 50).attr('height', 50);
		// let circleSelection = d3svg.append('circle')
		// 	.attr('cx', 25)
		// 	.attr('cy', 25)
		// 	.attr('r', 25)
		// 	.style('fill', 'purple');
	}

	//render html elements
	render() {
		var jsonCircles = [{
			"x_axis": 30,
			"y_axis": 30,
			"radius": 20,
			"color": "green"
		}, {
			"x_axis": 70,
			"y_axis": 70,
			"radius": 20,
			"color": "purple"
		}, {
			"x_axis": 110,
			"y_axis": 100,
			"radius": 20,
			"color": "red"
		}];
		const dots = jsonCircles.map((cur, index) => (
			<circle key={`dots-${index}`} cx={cur.x_axis} cy={cur.y_axis} r={cur.radius} fill={cur.color}></circle>
		));
		console.log('renderSVG');
		return (
			<div id="d3block" className="d3block">
             <h2>D3 SVG</h2>
             <svg width={200} height={200}>
		        {dots}
             </svg>
     	    </div>
		);
	}
}

export default d3View;