import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss';
import {itemPropTypes} from '../../types';
import {ItemType} from '../../types/typescript';

import {getAvatarImageSrc} from '../../utils/flickr';

const Avatar = ({item}: {item: ItemType}) => {
  return (
    <span className="avatar">
      <img src={getAvatarImageSrc(item)} alt="" />
    </span>
  )
}


Avatar.propTypes = {
  item: itemPropTypes.isRequired,
};

export default Avatar;