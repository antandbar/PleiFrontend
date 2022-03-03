import React, { Component, Fragment} from 'react';
import '../../styles/reset.css';
import '../../styles/global.css';
import './internalUserList.css';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import { internalUserService } from './InternalUserService';
import { constNames } from '../../const/index.js';



export default class InternalUserList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      users: []
    }

  }


  async componentDidMount() {
    this.setState({users:[]})
    // Se traen todos los usuarios internos
    const users = await internalUserService.getUsers();
    this.setState({users:users.results})
  }


  render() {
    return (
      <Fragment>
        <layouts.Tittle tittle= {constNames.titles.internalUser}/>
        <common.TableUsers users={this.state.users} redirec={constNames.routeNames.internalUserDetail}/> 
      </Fragment>
      
    );

  }
}

