import {
    SEND_ETHER
 } from './test.actions';
 
const initialState = {};
 
 export default (state = initialState, action) => {

    switch (action.type) {
       case SEND_ETHER: {
          return Object.assign({}, state, {
             timestamp: action.timestamp
          });
       }
       default:
          return state;
    }
 };
 
 