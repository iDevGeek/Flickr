import React from 'react';
import {ItemType} from '../../types/typescript';

import './FlickrLink.scss';

type FlickrLinkProps = {
  item: ItemType, 
  fullPath?: boolean,
  children: any
}

const FlickrLink= ({item, fullPath, children}: FlickrLinkProps) => {
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

export default FlickrLink;
