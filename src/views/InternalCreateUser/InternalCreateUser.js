import React, { Component, Fragment} from 'react';
import '../../styles/reset.css';
import '../../styles/global.css';

import { layouts } from '../../components/layout';
import { common } from '../../components/common';

import { constNames } from '../../const/index.js';


export default class InternalCreateUser extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
/*       user: {},
      person: {} */
    } 
  }

  async componentDidMount() {
/*     // Se trae el usuarios interno seleccionado
    const userId = parseInt(this.props.match.params.id,10);  
    const user = await internalUserDetailService.getUser(userId);   
    this.setState({user:user});
    this.setState({person:user.person});  */
  }


  render() {
    return (
      <Fragment>
        <layouts.Title title={constNames.titles.internalCreateUser}/>
      </Fragment>
      
    );

  }
}
