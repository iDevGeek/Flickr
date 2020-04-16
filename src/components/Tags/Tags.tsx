import React, { Component, MouseEvent } from 'react';
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

class Tags extends Component<TagsPropsType, TagsStateType> {
  constructor(props: TagsPropsType) {
    super(props);
    this.state = {
      visible: false
    };

    this.onClick = this.onClick.bind(this);
    this.onClickSelectTag = this.onClickSelectTag.bind(this);
  }

  onClickSelectTag(tag: string) {
    this.setState({visible: false});
    if (tag) {
      this.props.actions.setKeyword(tag);  
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
          <a href="#tags" onClick={this.onClick}>Tags</a>
        </span>
        <div className="card__box">
          <ul>
          {allTags.map((tag, index)=>{
            return (
              <Tag tag={tag} key={`${tag}${index}`} onSelectTag={(tag)=> {this.onClickSelectTag(tag)}} />
            )
          })}
          </ul>
        </div>
      </div>
    )
  }
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
