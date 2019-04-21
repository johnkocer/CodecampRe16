import React, { Component } from 'react';
import CustomTextInput from './ref'
import BindingComponent from './binding'
import CalbackComponent from './calback'

class HelpersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:true
          }
    }
    toggle= () =>{
this.setState({show: !this.state.show})
    }
    render() { 
        const{show} = this.state
        return ( 
            <div>
                Helpers Works!
                {show && <div>HI JOHN</div>}
<br></br>
<div style={{ display: (show ? 'block' : 'none') }}>I ma a DIV</div>
                <button onClick={this.toggle}>Togle</button>
                <hr></hr>
                {/* <CustomTextInput></CustomTextInput> */}
                {/* https://www.fullstackreact.com/articles/using-refs-in-react/ */}
                {/* <BindingComponent></BindingComponent> */}
<CalbackComponent value={ this.state.city } callback={ this.changeCity }></CalbackComponent>
            </div>
         );
    }
}
 
export default HelpersComponent;