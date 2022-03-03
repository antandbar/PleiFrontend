import React, { Component, Fragment} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';

export default class InternalCardUser extends Component {

    render() {
      return (
        <Fragment>
        
        <Card body color="secondary" outline className='card-user'>
        <CardTitle tag="h5">
        {this.props.user.id} - {this.props.user.username}
        </CardTitle>
        <CardText>
          email: {this.props.user.email} <br/>
           {this.props.person.wallet}   
          {/* tipo de usuario: {person.tipo_user} */}
          {/* {JSON.stringify(this.props.user.person.wallet)}   */}
          

      
        </CardText>
        <Button>
          Button
        </Button>
      </Card>
      {/* tipo de usuario: {JSON.stringify(this.props.user.person.tipo_user)}   */}
      </Fragment>
      );
    }
}