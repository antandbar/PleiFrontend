import React from 'react';
import ReactDOM from 'react-dom';
import InternalUserList from './InternalUserList.js';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


Enzyme.configure({ adapter: new Adapter() });

it('renders titleExist whithout crashing', () => {
  let comp = Enzyme.mount(<InternalUserList />);
  expect(comp.find("h1").at(0).text()).toEqual("Usuarios Internos");
});

it('renders h1Exist whithout crashing', () => {
  let comp = Enzyme.mount(<layouts.Tittle />);
  //console.log(comp.html());
  expect(comp.exists("h1")).toEqual(true);
});

it('renders TableUsers whithout crashing', () => {
  const div = document.createElement('div');
  const users = [
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
  ReactDOM.render(<common.TableUsers users = {users} />,div);
  ReactDOM.unmountComponentAtNode(div); 
});
