import React, { Component, ChangeEvent, FocusEvent, useState } from 'react';

import Tag from '../Tag';
import './Header.scss';
import  {filterTags} from '../../utils/flickr';


type HeaderPropsType = {
  data: any,
  keyword: string,
  setKeyword(keyword: string): any
}

type HeaderStateType = {
  value: string,
  inFocus: boolean
}

const Header = ({data, keyword, setKeyword}: HeaderPropsType) => {
  
  const [inFocus, setInFocus] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setValue(value);
    setKeyword(value);
  }
  
  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setInFocus(true);
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    // set delay for mouse click to happen
    window.setTimeout(()=>{
      setInFocus(false);
    }, 200);
  }

  const onClickSelectTag = (tag: string) => {
    setValue(tag);
    setKeyword(tag);
  }

  const filtered = filterTags(data.tags, value);
  const showTypeAhead = (inFocus && keyword && filtered.length > 0);

  return (
    <header className="header">

      <div className="header__search">
        <input 
          type="text" 
          autoComplete="off" 
          onBlur={handleBlur} 
          onFocus={handleFocus} 
          id="search" 
          name="search" 
          value={value} 
          onChange={handleChange} 
          placeholder="Search by tags..." />
        {
          (showTypeAhead)? 
          <div className="header__typeahead">
            <div className="card__box">
              <ul>
                {
                  filtered.map((item: [string, number], index: number) => {
                    const key = item[0];
                    const counter = item[1];
                    return (
                      <Tag 
                        tag={key} 
                        counter={counter} 
                        key={`${key}${index}`} 
                        onSelectTag={(tag: string) => {
                          onClickSelectTag(key);
                        }} />
                    )
                  })
                }  
              </ul>
            </div>
          </div>
          : null
        }
        <label htmlFor="search" className="header__icon">
          <svg viewBox="0 0 24 24">
            <path d="M21.707 18.88l-4.823-4.824A7.945 7.945 0 0 0 18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.48 0 2.865-.412 4.056-1.116l4.823 4.823a1 1 0 0 0 1.413 0l1.414-1.414a1 1 0 0 0 0-1.414zM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />
          </svg>
        </label>
       </div>
    </header>
  )
}

export default Header;
