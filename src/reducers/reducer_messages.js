import {GET_MESSAGES} from '../actions/index';

const INIT_STATE = {sentMessages: [], fuckCats: []};

export default function (state = INIT_STATE, action) {
  // console.log('reducer hit', action.type);
  switch (action.type) {
    case GET_MESSAGES:
      // return action.payload;
      return {...state, sentMessages: action.payload.data.results};
    default:
      return state;
  }
}