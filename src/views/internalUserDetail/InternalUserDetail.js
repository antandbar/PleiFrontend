import React, { Component} from 'react';
import '../../styles/reset.css';
import '../../styles/global.css';
import './internalUserDetail.css';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import { actions } from '../../stateManagement/store.js';
import { connect } from 'react-redux';

export class InternalUserDetail extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  async componentDidMount() {

    //const users = await internalUserService.getUsers();
    //this.props.set(users.results);
          

  }


  render() {
    return (
      <div className='user-internal-detail'>
        <layouts.Tittle title="Internal User Detail"/>
        <common.CardUser/>
        {/* <common.TableUsers users={this.props.users}/> */}
      </div>
      
    );

  }
}

const mapState = (state) => {
  return {users:state.users};

}
const mapActions = {set:actions.setUsers};

const internalUserDetail = connect(mapState,mapActions) (InternalUserDetail);

export default internalUserDetail;
