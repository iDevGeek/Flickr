import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import './Image.scss';

type ImageProps = {
  height: number,
  width: number, 
  src: string
}

const Image: FunctionComponent<ImageProps> = ({height, width, src}) => {
  const imageClassName = (height > width)? 'card__image--vertical' : 'card__image--horizontal';

  return (
    <div className="card__image">
      <LazyLoad>
        <img src={src} alt="" className={imageClassName} />
      </LazyLoad>
    </div>
  )
}

Image.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
