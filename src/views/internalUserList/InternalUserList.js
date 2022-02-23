import React, { Component} from 'react';
import './internalUserList.css';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import { internalUserService } from './InternalUserService';

export default class InternalUserList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      users: []
    }
  }

  async componentDidMount() {

    const users = await internalUserService.getUsers();
    this.setState({users:users.results})
          

  }

  chanceName = (e) => {
    this.setState({name:"manolo"})
  }

  render() {
    return (
      <div className='user-internal'>
        <layouts.Tittle title="Internal User"/>
        <h2>{this.state.name}</h2>
        <common.TableUsers users={this.state.users}/>
      </div>
      
    );

  }
}

