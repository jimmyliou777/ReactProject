import React, {
  Component
} from 'react';
//import './App.css';


class FetchApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
      let URL = 'https://jsonbin.org/jimmyliou777/test';
      fetch(URL)
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          this.setState({
            data: json
          })
          console.log('parsed json', json)
        })
        .catch((ex) => {
          console.log('parsing failed', ex)
        })
      console.log(this.state.data)
    } // end componentDidMount

  render() {
    let memList = null;
    let styleFetch = {
      "padding": "0 10px 10px"
    }
    if (this.state.data) {
      memList = this.state.data.map((current, index) => (
        <div key={`memList${current.name + index}`} className="mem memBlock">
          <div className="memList" >
         <div className="memHeading">
           <h2>fetchGetList</h2>
         </div>   
         <div className="memListMain"><div className="memListTitle"><span>id</span></div><div className="memListTitle"><span>name</span></div></div>
         <div className="memDetail"><div className="memListContent"><span>{current.id}</span></div><div className="memListContent"><span>{current.name}</span></div></div>
        </div>
        </div>
      ));
    }
    //console.log('fr:' + memList);
    return (
      <div className="memSet">
        {memList}
      </div>
    );
  }
}

export default FetchApp;