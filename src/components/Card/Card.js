import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactHtmlParser from 'react-html-parser';

import './Card.scss';
import Avatar from  '../Avatar';
import Views from  '../Views';
import FlickrLink from  '../FlickrLink';
import Tags from '../Tags';
import Image from '../Image';

import {getImageSrc} from '../../utils/flickr';

const Card = ({item}) => {
  const {title, id, ownername, description, tags, pathalias, views } = item; 
  return (
    <div className="card">
      <Image item={item} />
      <div className="card__content">
        
        <Views views={views} />
        <h3 className="card__title">
          <FlickrLink item={item} fullPath>{title}</FlickrLink>
        </h3>
        <h4 className="card__author">
          <span>by</span><Avatar item={item} /><FlickrLink item={item}>{ownername}</FlickrLink>
        </h4>

        <div className={`card__description ${(!description._content)? "card__description--empty": ''}`}>
          Description: <span>{(description._content)? ReactHtmlParser(description._content): 'no description...'}</span>
        </div>
        <Tags tags={tags} />
      </div>
    </div>
  );
}

// ImageGallery.propTypes = {
// };

export default Card;