import React, { Component} from 'react';
import '../../styles/reset.css';
import '../../styles/global.css';
import './internalUserEdit.css';
import { internalUserEditService } from './InternalUserEditService.js'; 
import { layouts } from '../../components/layout';
import { constNames } from '../../const/index.js';
import { common } from '../../components/common';



export default class InternalUserEdit extends Component {
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
    const user = await internalUserEditService.getUser(userId);   
    this.setState({user:user});
    this.setState({person:user.person}); 
  }

    transform = (user) => {
      if(!user.id) user.id = this.state.user.id;
      if(!user.username) user.username = this.state.user.username;
      if(!user.email) user.email = this.state.user.email;
      if(!user.person.tipo_user) user.person.tipo_user = this.state.person.tipo_user;
      if(!user.person.wallet) user.person.wallet = this.state.person.wallet;
      if(!user.person.t_wallet) user.person.t_wallet = this.state.person.t_wallet;

      return user;
    }
    // Se setea el usuario desde el hijo
    setUser = async (user) => {
      const userTransform = this.transform(user);
      const response = await internalUserEditService.updateUser(userTransform);
      this.setState({error:response})
    }


  render() {
    return (
      <div className='user-internal-edit'>
        <layouts.Title title={`${constNames.titles.internalEditUser} - Id: ${this.state.user.id}`} />
        <common.InternalFormUser person= {this.state.person} user={this.state.user} setUser={this.setUser} error= {this.state.error} redirec= {constNames.routeNames.internalUser}/>
      </div>
      
    );

  }
}
