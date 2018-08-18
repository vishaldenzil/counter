import React, { Component } from 'react';
export default class Counter extends Component {
  render() {
    return (
    <div> 
      <input type="button" value="Increment" onClick={this.props.incCount}/>
      <input type="button" value="Dcrement" onClick={this.props.decCount}/>
    </div>
    );
  }
}