import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import profile from './profile'
import users from './users'
import appointment from './appointment'
import treatment from './treatment'
import contact from './contact'
import confirm from './confirm'
import count from './count'

export default combineReducers({
  alert,
  auth,
  profile,
  users,
  appointment,
  treatment,
  contact,
  confirm,
  count
});
