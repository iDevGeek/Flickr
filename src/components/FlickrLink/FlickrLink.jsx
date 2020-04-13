import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {itemPropTypes} from '../../types';

const FlickrLink = ({item, fullPath, children}) => {
  const {id, pathalias } = item;
  
  let flickrOwnerPath = (pathalias) ? `https://www.flickr.com/photos/${pathalias}` : null;
  if (flickrOwnerPath && fullPath) {
    flickrOwnerPath += `/${id}`;
  }

  if (!flickrOwnerPath) {
    return (<span className="link link--empty">
      {children}
    </span>)
  }
  return (
    <a className="link" href={`${flickrOwnerPath}`}>{children}</a>
  )
}

FlickrLink.propTypes = {
  item: itemPropTypes.isRequired,
  fullPath: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element,PropTypes.string]).isRequired,
};

export default FlickrLink;
