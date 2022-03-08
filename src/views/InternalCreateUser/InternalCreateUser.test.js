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

it('renders InternalformdUsers whithout crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<common.InternalFormUser/>,div);
  ReactDOM.unmountComponentAtNode(div); 
}); 
