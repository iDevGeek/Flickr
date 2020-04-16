import React from 'react';
import LazyLoad from 'react-lazyload';

import './Avatar.scss';
import {ItemType} from '../../types/typescript';
import {getAvatarImageSrc} from '../../utils/flickr';

const Avatar = ({item}: {item: ItemType}) => {
  return (
    <span className="avatar">
      <LazyLoad>
        <img src={getAvatarImageSrc(item)} alt="" />
      </LazyLoad>
    </span>
  )
}

export default Avatar;