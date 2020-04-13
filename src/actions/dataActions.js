import axios from 'axios';

import * as types from '../constants/actionTypes';
import {endPoint} from '../config/main';

function startLoadingData(endPoint) {
  return {
    type: types.DATA_LOAD_START,
    endPoint,
  };
}

function dataLoaded(results) {
  return {
    type: types.DATA_LOAD_COMPLETE,
    results: results.map(result => result),
    lastUpdated: Date.now(),
  };
}

function dataLoadingError(error) {
  return {
    type: types.DATA_LOAD_ERROR,
    error,
  };
}

export function loadData() {
  return function(dispatch) {
    dispatch(startLoadingData(endPoint));
    axios.get(endPoint).then((result)=>{
      dispatch(dataLoaded(result.data.photos.photo));
    }).catch((error) => {
      dispatch(dataLoadingError(error))
    });
  }
}
