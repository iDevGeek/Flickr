import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './Card.scss';
import Avatar from  '../Avatar';
import Views from  '../Views';
import FlickrLink from  '../FlickrLink';
import Tags from '../Tags';
import Image from '../Image';
import {ItemType} from '../../types/typescript';

const Card = ({item}: {item: ItemType}) => {
  const {
    title, 
    ownername, 
    description, 
    tags, 
    views, 
    url_m, 
    height_m, 
    width_m 
  } = item;
  
  return (
    <div className="card">
      <Image src={url_m} width={width_m} height={height_m} />
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

export default Card;
