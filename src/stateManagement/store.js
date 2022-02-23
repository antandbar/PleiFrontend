//Redux
import {combineReducers, createStore} from 'redux';

const initialState = {
  users:[]

};

//Actions
export const actions = {
    addUser : (usr) => {
        return {
            type:"ADD_USER", 
            payload:usr
        };
    },
    setUsers : (users) => {
        return {
            type:"SET_USER", 
            payload:{users:users}
        };
    }
};
//Reducers
function userReducer(state = [], action) {
  switch(action.type) {
    case "ADD_USER": {
      let newst=[...state];
      let ch= {...action.payload, id:newst.length +1};
      newst.push(ch);
      return newst;
    }
    case "SET_USER": {
        return action.payload.users;
    }
    default:
      return state;
  }
}


const addreducer = combineReducers({users:userReducer});
//Store
export const store = createStore(addreducer,initialState);

