import React from 'react';

import './ImageGallery.scss';
import Card from '../Card';
import {ItemType} from '../../types/typescript';

type ImageGalleryTypes = {
  data: ItemType[],
  keyword: string
}

const ImageGallery = ({data, keyword}: ImageGalleryTypes) => {
  return (
    <div className={`image-gallery`}>
      {
        data.map((item) => {
          if (keyword !== null) {
            // search aginst entire string of keyword to create "fuzzy search"
            if (item.tags.indexOf(keyword) !== -1) {
              return (<Card item={item} key={item.id} />)
            }
            return null;
          }
          return (<Card item={item} key={item.id} />);
        })
      }
    </div>
  );
}

export default ImageGallery;
