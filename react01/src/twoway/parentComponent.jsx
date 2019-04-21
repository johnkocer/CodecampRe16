import React, { Component } from 'react';
import ChildComponent from './childComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'Select a color'
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(newColor){
    this.setState({
      color: newColor
    });
  }

  render() {
    const { color } = this.state;

    return (
      <div className="parent-component">
        <header className="header">
          <h4>Parent Component</h4>
          <p>{color}</p>
        </header>
        <ChildComponent changeColor={this.changeColor}/>
      </div>
    );
  }
}

export default ParentComponent;