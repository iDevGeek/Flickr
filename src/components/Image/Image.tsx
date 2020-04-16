import React from 'react';
import LazyLoad from 'react-lazyload';

import './Image.scss';

type ImageProps = {
  height: number,
  width: number, 
  src: string
}

const Image = ({height, width, src}: ImageProps) => {
  const imageClassName = (height > width)? 'card__image--vertical' : 'card__image--horizontal';

  return (
    <div className="card__image">
      <LazyLoad>
        <img src={src} alt="" className={imageClassName} />
      </LazyLoad>
    </div>
  )
}

export default Image;
