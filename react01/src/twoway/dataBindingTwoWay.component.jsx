import React, { Component } from 'react';
import ParentComponent from './parentComponent'
class DataBindingTwoWayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'John' }
    }

    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        })
      }
    render() { 
        return ( 
            <div>
                <h1>{ ' ' + this.state.name}</h1>
       <input type="text"
         onChange={this.handleChange}
         value={this.state.name} />
               <ParentComponent></ParentComponent>
            </div>
         );
    }
}
 
export default DataBindingTwoWayComponent;