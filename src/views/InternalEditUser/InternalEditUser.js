import React, { Component} from 'react';
import '../../styles/reset.css';
import '../../styles/global.css';
import './internalEditUser.css';
import { internalEditUserService } from './InternalEditUserService.js'; 
import { layouts } from '../../components/layout';
import { constNames } from '../../const/index.js';
import { common } from '../../components/common';
/* import './internalUserDetail.css';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import { internalUserDetailService } from './InternalUserDetailService.js' 
import { constNames } from '../../const/index.js'; */


export default class InternalEditUser extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      user: {},
      person: {}
    } 
  }

  async componentDidMount() {
    // Se trae el usuarios interno seleccionado
    const userId = parseInt(this.props.match.params.id,10);  
    const user = await internalEditUserService.getUser(userId);   
    this.setState({user:user});
    this.setState({person:user.person});
    console.log(user);  
  }


  render() {
    return (
      <div className='user-internal-edit'>
        <layouts.Title title={constNames.titles.internalEditUser}/>
        <common.InternalFormUser person= {this.state.person} user={this.state.user} setUser={this.setUser} error= {this.state.error} redirec= {constNames.routeNames.internalUser}/>
      </div>
      
    );

  }
}
