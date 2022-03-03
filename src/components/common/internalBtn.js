import React, { Component} from 'react';
import { Button } from 'reactstrap';
import './css/internalBtn.css';

export default class InternalBtn extends Component {
    
    render() {
        return (
            <Button className='btn-internal'>
            {this.props.value}
            </Button>
      
        );
    }
    


}
