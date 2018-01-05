import { combineReducers } from 'redux'
import testReducer from './../components/test/test.reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  testReducer,
  form: formReducer
})