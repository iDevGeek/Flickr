import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

import {getAvatarImageSrc} from '../../utils/flickr';

const Avatar = ({item}) => {
  return (
    <span className="avatar">
      <img src={getAvatarImageSrc(item)} alt="" />
    </span>
  )
}


// Avatar.propTypes = {
// };

export default Avatar;