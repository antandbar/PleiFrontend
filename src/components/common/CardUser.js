import React, { Component} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';

export default class CardUser extends Component {
    render() {
      return (
        <Card body color="secondary" outline className='card-user'>
        <CardTitle tag="h5">
          Special Title Treatment {/* {users.username}  */}
        </CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
          Button
        </Button>
      </Card>
      );
    }
}