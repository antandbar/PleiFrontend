import React, { Component} from 'react';
import './internalUserList.css';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import { internalUserService } from './InternalUserService';
import { actions } from '../../stateManagement/store.js';
import { connect } from 'react-redux';

export class InternalUserList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      //name: this.props.name
    }
  }

  async componentDidMount() {

    const users = await internalUserService.getUsers();
    this.props.set(users.results);
          

  }

/*   chanceName = (e) => {
    this.setState({name:"manolo"})
  } */

  render() {
    return (
      <div className='user-internal'>
        <layouts.Tittle title="Internal User"/>
        <common.TableUsers users={this.props.users}/>
      </div>
      
    );

  }
}

const mapState = (state) => {
  return {users:state.users};

}
const mapActions = {set:actions.setUsers};

const internalUserList = connect(mapState,mapActions) (InternalUserList);

export default internalUserList;