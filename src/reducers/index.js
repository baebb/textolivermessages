import {combineReducers} from 'redux';

import MessagesReducer from './reducer_messages';

const rootReducer = combineReducers({
  messages: MessagesReducer
});

export default rootReducer;
