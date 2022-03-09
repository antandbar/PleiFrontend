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
      users: [],
      numUsers: null
    }

  }

  async componentDidMount() {
    if (this.state.users.length === 0) {
      this.setState({users:[]})
      // Se traen todos los usuarios internos
      const users = await internalUserService.getUsers();
      this.setState({users:users.results});
      this.setState({numUsers:users.count});
      //console.log(users.count);

    }
  }

    // Se setea el usuario desde el hijo
    pagination = async (limit, offSet) => {
      this.setState({users:[]})
      // Se traen todos los usuarios internos
      const users = await internalUserService.getUsers(limit, offSet);
      this.setState({users:users.results});
      this.setState({numUsers:users.count}); 
    }

  render() {
    return (
      <Fragment>
        <layouts.Title title= {constNames.titles.internalUser}/>
        <div className='div-internalBtn'>
          <common.InternalBtn value={constNames.values.CreateUser} redirec={constNames.routeNames.internalCreateUser}/>
        </div>
        <common.PaginationElement numRecords = {this.state.numUsers} pagination= {this.pagination}></common.PaginationElement>
        <common.TableUsers users={this.state.users} redirec={constNames.routeNames.internalUserDetail}/> 
      </Fragment>
      
    );

  }
}

