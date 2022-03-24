import React, { Component} from 'react';
import '../../styles/reset.css';
import '../../styles/global.css';
import './internalUserEdit.css';
import { internalUserEditService } from './InternalUserEditService.js'; 
import { layouts } from '../../components/layout';
import { constNames } from '../../const/index.js';
import { common } from '../../components/common';
import { useParams } from 'react-router-dom';



class InternalUserEdit extends Component {
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
    const userId = this.props.id;  
    const user = await internalUserEditService.getUser(userId);   
    this.setState({user:user});
    this.setState({person:user.person}); 
  }

    transform = (user) => {
      if(!user.user_id) user.user_id = this.state.user.user_id;
      if(!user.id_internal) user.id_internal = this.state.user.id_internal;
      if(!user.blockchain) user.blockchain = this.state.user.blockchain;
      if(!user.wallet_type) user.wallet_type = this.state.user.wallet_type;
      if(!user.wallet_name) user.wallet_name = this.state.user.wallet_name;
      if(!user.wallet_address) user.wallet_address = this.state.user.wallet_address;

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
        <layouts.Title title={`${constNames.titles.internalEditUser} - Id: ${this.state.user.id_internal}`} />
        <common.InternalFormUser person= {this.state.person} user={this.state.user} setUser={this.setUser} error= {this.state.error} redirec= {constNames.routeNames.internalUser}/>
      </div>
      
    );

  }
}

const UserDetail = () => {
  const { id } = useParams();
  return (
    <InternalUserEdit id={id}/>
  )
}

export default UserDetail;