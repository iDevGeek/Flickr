import React, { MouseEvent } from 'react';

import './Tag.scss';

type TagPropsType = {
  tag: string,
  counter?: number,
  onSelectTag(tag: string): any
}

const Tag = ({tag, counter, onSelectTag}: TagPropsType) => {
  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    onSelectTag(tag);
  }
  return (
    <li className="card__tag">
      <a href={`#${tag}`} onClick={onClick}>
        {tag}
        {
          (counter)? 
            <b>{counter}</b>
          : null
        }
      </a>
    </li>
  );
}

export default Tag;
