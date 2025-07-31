import React, { Component } from 'react'

export default class LifyCycleInCBC extends Component {
  state={Count: 0};

    componentDidMount(){
      console.log("component Mounted");
      this.intervalID= setInterval(() =>{
        console.log("API CALL");
      },2000);
    }

    componentDidUpdate(){
      console.log("component Updated");
    }

    componentWillUnmount(){
      console.log("component Unmounted");
      clearInterval("this.intervalID");
    }
    increment=()=>this.setState({count : this.state.count +1})

  render() {
    return (
      <div>
        <h1>LifeCycleInCBC</h1>
        <h2>Count ={this.state.Count}</h2>
        <button onClick={this.increment}>update</button>

      </div>
    );
  }
}