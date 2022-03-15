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
      blockchain: "",
      wallet_type:"",
      wallet_name: "",
      wallet_address:"",
      user_id: "", 
      error:null     
    } 
  }


  // Se seta el objeto desde el estado
  transformUser = () => {
    return { 
      user_id: 1,
      blockchain: this.state.blockchain,
      wallet_type: this.state.wallet_type,
      wallet_name: this.state.wallet_name,
      wallet_address: this.state.wallet_address,
/*         person: {
          tipo_user: "INT",
          wallet: this.state.wallet,
          t_wallet: this.state.t_wallet
        } */
    }
  }

  // Se llama a la función del padre
  sendUser = (e) => {
    this.props.setUser(this.transformUser());
    e.preventDefault();
   /*  window.location.href = this.props.redirec; */
  }
  
  userblockchainChange = (e) => {
    this.setState({blockchain:e.target.value});
  }

  userWalletTypeChange = (e) => {
    this.setState({wallet_type:e.target.value});
  }
  userWalletNameChange = (e) => {
    this.setState({wallet_name:e.target.value});
  }
  userWalletAddressChange = (e) => {
    this.setState({wallet_address:e.target.value});
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
    // Se actualiza la propiedad t_wallet cada check
   if(this.props.person?.t_wallet != null){
       this.props.person.t_wallet = e.target.value;
    } 
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
          <Label for="User" sm={2}>
            User
          </Label>
          <Col sm={10}>
            <Input id="User" name="User" value={"Plei Super Admin"} readOnly/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="blockchain" sm={2}>
            Blockchain
          </Label>
          <Col sm={10}>
            <Input id="blockchain" name="blockchain" placeholder="blockchain" 
            defaultValue= {this.props.user?.blockchain?this.props.user?.blockchain:""} onChange={this.userblockchainChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="wallet_type" sm={2}>
            Wallet Type
          </Label>
          <Col sm={10}>
            <Input id="wallet_type" name="wallet_type" placeholder="wallet Type" 
            defaultValue= {this.props.user?.wallet_type?this.props.user?.wallet_type:""} onChange={this.userWalletTypeChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="wallet_name" sm={2}>
            Wallet Name
          </Label>
          <Col sm={10}>
            <Input id="wallet_name" name="wallet_name" placeholder="wallet Name" 
            defaultValue= {this.props.user?.wallet_name?this.props.user?.wallet_name:""} onChange={this.userWalletNameChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="wallet_address" sm={2}>
          wallet Address
          </Label>
          <Col sm={10}>
            <Input id="wallet_address" name="wallet_address" placeholder="wallet Address" 
            defaultValue= {this.props.user?.wallet_address?this.props.user?.wallet_address:""} onChange={this.userWalletAddressChange}/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{offset: 2,size: 10,}}>
            <Button className="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Fragment>
/*       <Fragment>
        <Form className="form-internal-user" onSubmit={this.sendUser}>
        <IsAlert isError= {this.props.error}/>
          <FormGroup row>
            <Label for="user-name" sm={2}>
              User Name
            </Label>
            <Col sm={10}>
              <Input id="user-name" name="user-name" placeholder="User Name" required 
              defaultValue= {this.props.user?.username?this.props.user?.username:""} onChange={this.userNameChange}/>
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
              <Input id="email" name="email" placeholder="email" type="email" required 
              defaultValue= {this.props.user?.email?this.props.user?.email:""} onChange={this.emailChange}/>
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
              <Input id="wallet" name="wallet" type="textarea" placeholder="Wallet" 
              defaultValue={this.props.person?.wallet?this.props.person?.wallet:""} onChange={this.walletChange}/>
            </Col>
          </FormGroup>
          <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-2">
            Wallet Type
          </legend>
          <Col sm={10}>
            <FormGroup check>
              <Input name="radio1" type="radio" value="Ronin" 
              checked={ this.props.person?.t_wallet === "Ronin"? 
                true:false}  
                onChange={this.tWalletChange}/>
              {' '}
              <Label check>
                Ronin 
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" value="Etherum" 
              checked={ this.props.person?.t_wallet === "Etherum"? 
              true:false}   
                onChange={this.tWalletChange}/>
              {' '}
              <Label check>
                Etherum 
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Input disabled name="radio1" type="radio" value="Tron" 
              checked={ this.props.person?.t_wallet === "Tron"? 
              true:false} 
              onChange={this.tWalletChange}/>
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
      </Fragment> */
    );
  }
}
