import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { preferencesReducer } from './preferences';
import dashboard from './dashboard';
import repositories from './repositories';
import users from './users';
import userDetails from './userDetails';
import bookmarks from './bookmarks';

export default combineReducers({
  users: persistReducer(
    { key: 'users', storage },
    users
  ),
  userDetails: persistReducer(
    { key: 'userDetails', storage },
    userDetails
  ),
  dashboard: persistReducer(
    { key: 'dashboard', storage },
    dashboard
  ),
  repositories: persistReducer(
    { key: 'repositories', storage },
    repositories
  ),
  bookmarks: persistReducer(
    { key: 'bookmarks', storage },
    bookmarks
  ),
  preferences: persistReducer(
    { key: 'preferences', storage },
    preferencesReducer
  ),
});
