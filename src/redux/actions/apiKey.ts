// Create action creators
import * as actionType from './actionTypes';

export function getApiKey(apiKey: string) {
  return {
    type: actionType.ON_CHANGE,
    payload: apiKey,
  };
}
