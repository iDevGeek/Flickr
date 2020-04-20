import React, {useEffect} from 'react';
import { forceCheck } from 'react-lazyload';

import './ImageGallery.scss';
import Card from '../Card';
import {ItemType} from '../../types/typescript';

type ImageGalleryTypes = {
  data: ItemType[],
  loading: boolean,
  keyword: string
}

const ImageGallery = ({data, keyword, loading}: ImageGalleryTypes) => {
  
  useEffect(()=>{
    forceCheck();
  });

  const filteredCards = data.map((item) => {
    if (keyword !== null) {
      // search aginst entire string of keyword to create "fuzzy search"
      if (item.tags.indexOf(keyword) !== -1) {
        return (<Card item={item} key={item.id} />)
      }
      return null;
    }
    return (<Card item={item} key={item.id} />);
  });

  const counted: any = filteredCards.filter((item) => { return (item !== null)});

  if (counted.length === 0) {
    if (loading) {
      return (<p className="empty-result">Loading data...</p>)
    }
    return (<p className="empty-result">Sorry, no results found</p>)
  }

  return (
    <div className={`image-gallery`}>
      {filteredCards}
    </div>
  );
}

export default ImageGallery;
