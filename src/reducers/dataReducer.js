import {DATA_LOAD_START, DATA_LOAD_COMPLETE, DATA_LOAD_ERROR} from '../constants/actionTypes';
import objectAssign from 'object-assign';

import initialState from './initialState';

export default function dataReducer(state = initialState.data, action) {
  switch (action.type) {
    case DATA_LOAD_COMPLETE:
      return objectAssign({}, state, {
        loading: false,
        error: null,
        results: action.results,
        tags: action.tags
      });
    case DATA_LOAD_ERROR:
      return objectAssign({}, state, {
        loading: false,
        error: action.error,
        results: [],
        tags: null
      });
    case DATA_LOAD_START:
      return objectAssign({}, state, {
        endPoint: action.endPoint,
        loading: true,
        error: null
      });
    default:
      return state;
  }
}
