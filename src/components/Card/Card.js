import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getImageSrc} from '../../utils/flickr';

const Link = ({item, fullPath, children}) => {
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

const Card = ({item}) => {
  const {title, id, ownername, description, tags, pathalias } = item;
  const allTags = (typeof tags === 'string' && tags.length > 0)? tags.split(' ') : [];
  
  return (
    <div className="card">
      <div className="card-image">
        <img src={getImageSrc(item)} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <Link item={item} fullPath>{title}</Link> by <Link item={item}>{ownername}</Link>
        </div>
        <div className="card-description">
          Description: {(description._content)? description._content: 'N/A'}
        </div>
        <div className="card-tags">
          <ul>
          {allTags.map((tag, index)=>{
            return (
              <li key={`${tag}${index}`}>
                {tag}
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ImageGallery.propTypes = {
// };

export default Card;