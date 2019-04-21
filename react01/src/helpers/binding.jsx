import React, { Component } from 'react';
export default class BindingComponent extends Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();

      this.state ={
          textValue: ''
      }
      //this.focusTextInput = this.focusTextInput.bind(this);
      this.onClickHandleBind = this.onClickHandleBind.bind(this)
    }
  
    onClickHandle= (e) => {
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
  
    onClickHandleBind() {
      console.log(this.textInput.current.value)
  }

  onClickHandleArrow =() => {
    console.log(this.textInput.current.value)
}

onClickHandleArrowValue =(value) => {
  console.log(value)
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
  
          <button type="button" value="Focus the text input"
            onClick={(e)=>this.onClickHandle(e)}
          >Focus the text input</button>
          <br></br> <button type="button" value="Focus the text input"
            onClick={this.onClickHandleBind}
          >Bind</button>

<br></br> <button type="button" value="Focus the text input"
            onClick={this.onClickHandleArrow}
          >Arrow</button>
          <br></br> <button type="button" value="Focus the text input"
            onClick={()=>this.onClickHandleArrowValue(this.textInput.current.value)}
          >Pass a value</button>

        </div>
      );
    }
  }