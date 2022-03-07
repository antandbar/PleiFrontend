import React, { Component} from 'react';
import '../../styles/reset.css';
import '../../styles/global.css';
/* import './internalUserDetail.css';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import { internalUserDetailService } from './InternalUserDetailService.js' 
import { constNames } from '../../const/index.js'; */


export default class InternalUserDetail extends Component {
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
/*     const userId = parseInt(this.props.match.params.id,10);  
    const user = await internalUserDetailService.getUser(userId);   
    this.setState({user:user});
    this.setState({person:user.person});  */
  }


  render() {
    return (
      <div className='user-internal-detail'>
{/*         <layouts.Title title={constNames.titles.internalUserDetail}/>
      <common.CardUser user= {this.state.user} person= {this.state.person} comeBack= {constNames.routeNames.internalUser}/> */}
      </div>
      
    );

  }
}
