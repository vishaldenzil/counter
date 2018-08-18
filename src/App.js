import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Counter from './components/counter'
//its declared in index.js
//index is starting point of react js
//<App/> this calling component 
class App extends Component {
    constructor()
    {
        super();
        //only one state will be there you can declare any number of variable

        this.state = {
           counter:0
           //any number of variable

          }
          this.incCount=this.incCount.bind(this);
          this.decCount= this.decCount.bind(this)
          //always u have to bind all method
    }
  incCount()
  {
    this.setState({counter:this.state.counter+1});
  }
  decCount()
  {
    this.setState({counter:this.state.counter-1});
  }
  render() {

    return (
      <div className="App">
    {/* this is calling components */}
   {/* In this class state is like ur local varible. */}
    {/* am passing count to next component */}
       
        <Counter count={this.state.counter} incCount={this.incCount} decCount={this.decCount}/>

         <div>   {this.state.counter} </div>
      </div>
    );
  
}
}

export default App;