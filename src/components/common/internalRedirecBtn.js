import React, { Component} from 'react';
import { Button } from 'reactstrap';
import './css/internalRedirecBtn.css';

export default class InternalBtn extends Component {

    redirec = async (e) => {
        // Se redireccionar
        window.location.href = this.props.redirec;
      };
    
    render() {
        return (
            <Button className='btn-internal' onClick={this.redirec}>
            {this.props.value}
            </Button>
      
        );
    }
    
}
