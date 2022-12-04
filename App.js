import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
/*import av1 from "./R.jpg";*/


class App extends Component {
  constructor() {
    super();
    this.state = {
      fulleName: "zina",
      profission: "sales",
      age: "30ans",
      image: "http://www.clker.com/cliparts/9/c/a/9/133181080294472335portfolio-hi.png",
      shows: false,
      cnt: 0,

    }

  }
  change = () => {
    this.setState({ shows: !this.state.shows });

  }
  componentDidMount() {
    setInterval(() => {

      this.setState({
        cnt: this.state.cnt += 1
      });
    }, 1000
    )
  }
  render() {
    return (
      <div className='stat'>
        {this.state.shows ?
          <div>
            <h1>{this.state.fulleName}</h1>
            <p>{this.state.profission}</p>
            <p>{this.state.age}</p>
            <img src={this.state.image} /><br></br>
          </div> : null}
        Count: {this.state.cnt}{" "}
        sec
        <button onClick={this.change}>show</button>

      </div>
    )
  }

}

export default App








