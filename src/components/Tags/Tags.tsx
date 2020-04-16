import React, { Component, MouseEvent } from 'react';

import './Tags.scss';
import {tagsUrl} from '../../config/main';

type TagsPropsType = {
  tags: string
}

type TagsStateType = {
  visible: boolean
}

class Tags extends Component<TagsPropsType, TagsStateType> {
  constructor(props: TagsPropsType) {
    super(props);
    this.state = {
      visible: false
    }
  }

  onClick(event: MouseEvent) {
    const {visible} = this.state;
    event.preventDefault();
    this.setState({visible: !visible});
  }

  render() {
    const {tags} = this.props;
    const allTags = (typeof tags === 'string' && tags.length > 0)? tags.split(' ') : [];

    if (allTags.length === 0) {
      return (
        <div className="card__tags card__tags--empty">
        </div>
      )
    }
    const {visible} = this.state;
    const tagsVisible = (visible)? 'card__tags--expanded' : '';
    return (
      <div className={`card__tags ${tagsVisible}`}>
        <span className="card__button">
          <a href="#tags" onClick={(e)=>{this.onClick(e)}}>Tags</a>
        </span>
        <div className="card__box">
          <ul>
          {allTags.map((tag, index)=>{
            return (
              <li key={`${tag}${index}`}>
                <a href={`${tagsUrl}${tag}`}>{tag}</a>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Tags;
