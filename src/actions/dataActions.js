import axios from 'axios';

import * as types from '../constants/actionTypes';
import {endPoint} from '../config/main';

function startLoadingData(endPoint) {
  return {
    type: types.DATA_LOAD_START,
    endPoint,
  };
}

function dataLoaded(results, tags) {
  return {
    type: types.DATA_LOAD_COMPLETE,
    results: results.map(result => result),
    tags: {...tags},
    lastUpdated: Date.now(),
  };
}

function dataLoadingError(error) {
  return {
    type: types.DATA_LOAD_ERROR,
    error,
  };
}

function getTags(data) {
  const tags = {};
  data.forEach((item)=>{
    const allTags = item.tags.split(' ');
    for (let i = allTags.length - 1; i >= 0; i--) {
      const key = allTags[i];
      if (typeof tags[key] !== 'undefined') {
        tags[key].push(item.id);
      } else {
        tags[key] = [item.id];
      }
    }
  });
  return tags;
}

export function loadData() {
  return function(dispatch) {
    dispatch(startLoadingData(endPoint));
    axios.get(endPoint).then((result)=>{
      const {photo} = result.data.photos;
      const tags = getTags(photo);     
      dispatch(dataLoaded(photo, tags));
    }).catch((error) => {
      dispatch(dataLoadingError(error))
    });
  }
}
