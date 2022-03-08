import React, { Component } from 'react';
import '../../styles/reset.css';
import '../../styles/global.css';
import './internalUserCreate.css';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import { constNames } from '../../const/index.js';
import { internalUserCreateService } from './InternalUserCreateService.js';


export default class InternalCreateUser extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      error: null,
      person: {t_wallet:""}
    } 
    
  }

  // Se setea el usuario desde el hijo
  setUser = async (user) => {
    const response = await internalUserCreateService.createUser(user);
    this.setState({error:response})
    //console.log(this.setState.error);
    //window.location.href = this.props.redirec;

    //return response
  }

  render() {
    return (
      <div className='user-internal-create'>
        <layouts.Title title={constNames.titles.internalCreateUser}/>
        <common.InternalFormUser person= {this.state.person} setUser={this.setUser} error= {this.state.error} redirec= {constNames.routeNames.internalUser}/>
      </div>
      
    );

  }
}
