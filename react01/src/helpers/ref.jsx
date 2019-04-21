import React, { Component } from 'react';
export default class CustomTextInput extends Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();

      this.state ={
          textValue: ''
      }
      //this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput= (e) => {
        e.preventDefault();
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();
      this.setState({
          textValue: this.textInput.current.value
      });
      //debugger
      this.textInput.current.value = "Hello"
    }
  
    onChange = (e) =>{
        this.setState({
            textValue: e.target.value
        });
        console.log(this.textInput.current.value)
    }
    render () {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
            <div>Text Value: {this.state.textValue}</div>
          <input type="text" defaultValue='JOHN' ref={this.textInput}
           onChange={(e)=> this.onChange(e)} />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={(e)=>this.focusTextInput(e)}
          />
        </div>
      );
    }
  }