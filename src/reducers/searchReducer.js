import {SEARCH_SET_KEYWORD} from '../constants/actionTypes';
import objectAssign from 'object-assign';

import initialState from './initialState';

export default function dataReducer(state = initialState.search, action) {
  switch (action.type) {
    case SEARCH_SET_KEYWORD:
      return objectAssign({}, state, {
        keyword: action.keyword
      });
    default:
      return state;
  }
}
