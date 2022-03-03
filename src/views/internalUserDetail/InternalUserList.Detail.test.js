import React from 'react';
import ReactDOM from 'react-dom';
import { layouts } from '../../components/layout';
import { common } from '../../components/common';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


Enzyme.configure({ adapter: new Adapter() });

it('renders h1Exist whithout crashing', () => {
  let comp = Enzyme.mount(<layouts.Title />);
  //console.log(comp.html());
  expect(comp.exists("h1")).toEqual(true);
}); 

it('renders TableUsers whithout crashing', () => {
  const div = document.createElement('div');
  const user = 
                {
                "id": 2,
                "username": "plei2",
                "email": "plei2@plei.games",
                "person": {
                    "tipo_user": "GEN",
                    "wallet": "paraguas pinguino casa",
                    "t_wallet": "ethe"
                }
              }

  const person = {
    "tipo_user": "GEN",
    "wallet": "paraguas pinguino casa",
    "t_wallet": "ethe"
}
  ReactDOM.render(<common.CardUser user = {user} person = {person} />,div);
  ReactDOM.unmountComponentAtNode(div); 
}); 
