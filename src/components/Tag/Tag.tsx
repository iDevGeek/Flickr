import React, { Component, MouseEvent } from 'react';

import './Tag.scss';

type TagPropsType = {
  tag: string,
  onSelectTag(tag: string): any
}

type TagStateType = {
  visible: boolean
}

class Tag extends Component<TagPropsType, TagStateType> {
  constructor(props: TagPropsType) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    const {tag} = this.props;
    this.props.onSelectTag(tag);
  }

  render() {
    const {tag} = this.props;
    return (
      <li className="card__tag">
        <a href={`#${tag}`} onClick={this.onClick}>{tag}</a>
      </li>
    );
  }

}

export default Tag;