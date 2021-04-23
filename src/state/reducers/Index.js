import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { preferencesReducer } from './preferences';
import dashboard from './dashboard';
import users from './users';

export default combineReducers({
  users: persistReducer(
    { key: 'users', storage },
    users
  ),
  dashboard: persistReducer(
    { key: 'dashboard', storage },
    dashboard
  ),
  preferences: persistReducer(
    { key: 'preferences', storage },
    preferencesReducer
  ),
});
