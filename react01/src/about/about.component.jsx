import React, { Component } from 'react';
import HelpersComponnet from '../helpers/helpers.component'

class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <div>
                About Works!
                <HelpersComponnet></HelpersComponnet>

            </div>
         );
    }
}
 
export default AboutComponent;