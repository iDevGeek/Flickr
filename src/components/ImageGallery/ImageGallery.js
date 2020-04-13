import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

const ImageGallery = ({data}) => {
  return (
    <div className={`image-gallery`}>
      {
        data.map((item) => {
          return (
            <Card item={item} key={item.id} />
          )
        })
      }
    </div>
  );
}

// ImageGallery.propTypes = {
// };

export default ImageGallery;
