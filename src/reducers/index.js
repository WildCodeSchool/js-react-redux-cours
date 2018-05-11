import { combineReducers } from 'redux';

import UsersReducer from './users';
import ActiveUserReducer from './active-user';

// combine all reducers 
const allReducers = combineReducers({
    users: UsersReducer,
    activeUser: ActiveUserReducer
})

export default allReducers;