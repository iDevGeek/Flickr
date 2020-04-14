import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tags.scss';

import {formatNumber} from '../../utils/formatter';
import {tagsUrl} from '../../config/main';

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  onClick(e) {
    const {visible} = this.state;
    e.preventDefault();
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

Tags.propTypes = {
  tags: PropTypes.string.isRequired
};

export default Tags;
