import React, { MouseEvent, useState } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as searchActions from '../../actions/searchActions';

import Tag from '../Tag';
import './Tags.scss';

type TagsPropsType = {
  tags: string,
  actions: any,
  data: any,
}

type TagsStateType = {
  visible: boolean
}

const Tags = ({tags, actions, data}: TagsPropsType) => {
  const [visible, setVisibility] = useState(false);

  const onClickSelectTag = (tag: string) => {
    setVisibility(false);
    if (tag) {
      actions.setKeyword(tag);
    }
  }
  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    setVisibility(!visible);
  }

  const allTags = (typeof tags === 'string' && tags.length > 0)? tags.split(' ') : [];

  if (allTags.length === 0) {
    return (
      <div className="card__tags card__tags--empty" />
    )
  }

  const tagsVisible = (visible)? 'card__tags--expanded' : '';

  return (
    <div className={`card__tags ${tagsVisible}`}>
      <span className="card__button">
        <a href="#tags" onClick={onClick}>Tags</a>
      </span>
      <div className="card__box">
        <ul>
        {allTags.map((tag, index)=>{
          return (
            <Tag tag={tag} key={`${tag}${index}`} onSelectTag={(tag)=> {onClickSelectTag(tag)}} />
          )
        })}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    data: state.data,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: {
      ...bindActionCreators(searchActions, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
