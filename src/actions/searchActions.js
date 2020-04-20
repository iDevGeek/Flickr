import * as types from '../constants/actionTypes';

export function setKeyword(keyword) {
  return {
    type: types.SEARCH_SET_KEYWORD,
    keyword,
  };
}
