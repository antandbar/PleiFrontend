import React from 'react';
import ReactDOM from 'react-dom';
import InternalUser from './InternalUser';
import { Tittle, TableUsers } from './InternalUser';

it('renders InternalUser whithout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InternalUser />,div);
  ReactDOM.unmountComponentAtNode(div); 
});

it('renders Tittle whithout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tittle />,div);
  ReactDOM.unmountComponentAtNode(div); 
});

it('renders TableUsers whithout crashing', () => {
  const div = document.createElement('div');
  let users = [
                {
                  "id": 2,
                  "username": "plei2",
                  "email": "plei2@plei.games",
                  "person": {
                      "tipo_user": "GEN",
                      "wallet": "paraguas pinguino casa",
                      "t_wallet": "ethe"
                  }
              },
              {
                  "id": 1,
                  "username": "plei",
                  "email": "plei@plei.games",
                  "person": {
                      "tipo_user": "GEN",
                      "wallet": "perro gato",
                      "t_wallet": "Ether"
                  }
              }
  ] 
  ReactDOM.render(<TableUsers users = {users} />,div);
  ReactDOM.unmountComponentAtNode(div); 
});
