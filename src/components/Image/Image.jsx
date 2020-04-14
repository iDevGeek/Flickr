import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

import {itemPropTypes} from '../../types';

const Image = ({item}) => {
  const {title, url_n, height_n, width_n } = item; 
  const imageClassName = (height_n > width_n)? 'card__image--vertical' : 'card__image--horizontal';

  return (
    <div className="card__image">
      <img src={url_n} alt={title} className={imageClassName} />
    </div>
  )
}

Image.propTypes = {
  item: itemPropTypes.isRequired
};

export default Image;
