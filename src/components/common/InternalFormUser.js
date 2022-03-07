import React, { Component, Fragment } from "react";
import { layouts } from '../layout';
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
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password:"",
      email: "",
      wallet:null,
      t_wallet:null,
      error:null
        
    } 
  }
  // Se seta el objeto desde el estado
  transformUser = () => {
    return { 
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        person: {
          tipo_user: "INT",
          wallet: this.state.wallet,
          t_wallet: this.state.t_wallet
        }
    }
  }

  // Se llama a la función del padre
  sendUser = (e) => {
    this.props.setUser(this.transformUser());
    e.preventDefault();
   /*  window.location.href = this.props.redirec; */
  }
  
  userNameChange = (e) => {
    this.setState({username:e.target.value});
  }

  pswChange = (e) => {
    this.setState({password:e.target.value});
  }

  emailChange = (e) => {
    this.setState({email:e.target.value});
  }

  walletChange = (e) => {
    this.setState({wallet:e.target.value});
  }
  tWalletChange = (e) => {
    this.setState({t_wallet:e.target.value});
  }

  render() {
    // Se evalua si se guardo correctamente     
    if(this.props.error === false) {
      window.location.href = this.props.redirec;
    }   
    // Se crea el objeto alert para manejar usuario
    function IsAlert(error) {
      const errorAlert = error.isError;
      if(errorAlert === null || !errorAlert) {
        return <Fragment></Fragment>
      }
      return <layouts.Alert error={errorAlert}/>
    }
    return (
      <Fragment>
        <Form className="form-internal-user" onSubmit={this.sendUser}>
        <IsAlert isError= {this.props.error}/>
          <FormGroup row>
            <Label for="user-name" sm={2}>
              User Name
            </Label>
            <Col sm={10}>
              <Input id="user-name" name="user-name" placeholder="User Name" required onChange={this.userNameChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input id="password" name="password" placeholder="Password" type="password" required onChange={this.pswChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input id="email" name="email" placeholder="email" type="email" required onChange={this.emailChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="user-type" sm={2}>
              User Type
            </Label>
            <Col sm={10}>
              <Input id="user-type" name="user-type" type="select" disabled>
                <option>Internal</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="wallet" sm={2}>
              Wallet
            </Label>
            <Col sm={10}>
              <Input id="wallet" name="wallet" type="textarea" placeholder="Wallet" onChange={this.walletChange}/>
            </Col>
          </FormGroup>
          <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-2">
            Wallet Type
          </legend>
          <Col sm={10}>
            <FormGroup check>
              <Input name="radio1" type="radio" value="Ronin" onChange={this.tWalletChange}/>
              {' '}
              <Label check>
                Ronin
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" value="Etherum" onChange={this.tWalletChange}/>
              {' '}
              <Label check>
                Etherum
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Input disabled name="radio1" type="radio" value="Tron" onChange={this.tWalletChange}/>
              {' '}
              <Label check>
                Tron
              </Label>
            </FormGroup>
          </Col>
            </FormGroup>
          <FormGroup check row>
            <Col sm={{offset: 2,size: 10,}}>
              <Button className="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Fragment>
    );
  }
}
