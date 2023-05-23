import { legacy_createStore as createStore, combineReducers } from 'redux';
import { apiKey } from '../reducers/apiKey';

const reducers = combineReducers({
  value: apiKey,
});

export const configureStore = () => createStore(reducers);
