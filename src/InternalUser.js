import React, { Component} from 'react';
import {Table} from 'reactstrap';
import './internalUser.css';

export default class InternalUser extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      users: []
    }
  }

  componentDidMount() {
     //const url = "http://127.0.0.1:8000/internal/api/1.0/user_internal/" 
     const url = "http://13.38.85.64:8000/internal/api/1.0/user_internal/"

    fetch(url)
        .then(response => response.json())
        .then(data => this.setState({users:data.results}))
        .catch((error) => {
          console.log(error);          
          }) 

  }

  chanceName = (e) => {
    this.setState({name:"manolo"})
  }

  render() {
    return (
    
      <div className='user-internal'>
        <Tittle title="Internal User"/>
        <h2>{this.state.name}</h2>
        <TableUsers users={this.state.users}/>
      </div>
      
    );

  }
}

export class Tittle extends Component {
  render() {
    return (
      <div className="CreateInternalUser">
        <h1>{this.props.title}</h1>

      </div>
    );
  }
}

export class TableUsers extends Component {
  render() {
    return (
      <div className='user-table'>
        <Table dark>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
              User Name
              </th>
              <th>
                Email
              </th>
              <th>
                User Type
              </th>
              <th>
                Wallet
              </th>
              <th>
                Wallet Type
              </th>
            </tr>
          </thead>
          <tbody>
                {this.props.users.map(users => 
                <tr key={users.id}>
                  <th scope="row">
                    {users.id}
                  </th>
                  <td>
                    {users.username} 
                  </td>
                  <td>
                    {users.email}
                  </td>
                  <td>
                    {JSON.stringify(users.person.tipo_user).replace(/["']/g, "")}
                  </td>
                  <td>
                    {JSON.stringify(users.person.wallet).replace(/["']/g, "")}
                  </td>
                  <td>
                  {JSON.stringify(users.person.t_wallet).replace(/["']/g, "")}
                  </td>
                </tr>)}
          </tbody>
        </Table>
    </div>
    );
  }
}


