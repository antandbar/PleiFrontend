import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class InternalTableUsers extends Component {
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
                <th>
                  Detail
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
                    <td>
                    <a href={this.props.redirec + "/" + users.id}>Detalle</a>
                    </td>
                  </tr>)}
            </tbody>
          </Table>
      </div>
      );
    }
}