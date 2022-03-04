import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
} from "reactstrap";
import "./css/internalFormUser.css";

export default class InternalFormUser extends Component {
  render() {
    return (
      <Form className="form-internal-user">
        <FormGroup row>
          <Label for="user-name" sm={2}>
            User Name
          </Label>
          <Col sm={10}>
            <Input id="user-name" name="user-name" placeholder="User Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input id="password" name="password" placeholder="Password" type="password"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input id="email" name="email" placeholder="email" type="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="user-type" sm={2}>
            User Type
          </Label>
          <Col sm={10}>
            <Input id="user-type" name="user-type" type="select">
              <option>Internal</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="wallet" sm={2}>
            Wallet
          </Label>
          <Col sm={10}>
            <Input id="wallet" name="wallet" type="textarea" />
          </Col>
        </FormGroup>
        <FormGroup
        row tag="fieldset">
        <legend className="col-form-label col-sm-2">
          Wallet Type
        </legend>
        <Col sm={10}>
          <FormGroup check>
            <Input name="radio2" type="radio"/>
            {' '}
            <Label check>
              Ronin
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio2" type="radio"/>
            {' '}
            <Label check>
              Etherum
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input disabled name="radio2" type="radio"/>
            {' '}
            <Label check>
              Tron
            </Label>
          </FormGroup>
        </Col>
          </FormGroup>
        <FormGroup check row>
          <Col sm={{offset: 2,size: 10,}}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
