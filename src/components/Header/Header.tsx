import React, { Component, ChangeEvent, FocusEvent } from 'react';

import Tag from '../Tag';
import './Header.scss';

type HeaderPropsType = {
  data: any,
  keyword: string,
  setKeyword(keyword: string): any
}

type HeaderStateType = {
  value: string,
  inFocus: boolean
}

class Header extends Component<HeaderPropsType, HeaderStateType> {
  constructor(props: HeaderPropsType) {
    super(props);
    this.state = {
      value: '',
      inFocus: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.onClickSelectTag = this.onClickSelectTag.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const {value} = event.target;
    this.setState({value});
    this.props.setKeyword(value);
  }
  
  handleFocus(event: FocusEvent<HTMLInputElement>) {
    this.setState({inFocus: true});
  }

  handleBlur(event: FocusEvent<HTMLInputElement>) {
    // set delay for mouse click to happen
    window.setTimeout(()=>{
      this.setState({inFocus: false});  
    }, 100);
  }

  onClickSelectTag(tag: string) {
    this.setState({value: tag});
    this.props.setKeyword(tag);
  }

  filterTags(tags: null | []): []{
    const {value} = this.state;
    let result: any = [];
    if (tags && value){
      result = Object.keys(tags).map((key)=>{
        if (key.indexOf(value) !== -1) {
          return key;
        }
        return null;
      });
      return result.filter((item: null | string)=>{
        return (item !== null);
      })
    }

    return result;
  }

  render() {
    const {keyword, data} = this.props;
    const filtered = this.filterTags(data.tags);
    const showTypeAhead = (this.state.inFocus && keyword && filtered.length > 0);
    return (
      <header className="header">

        <div className="header__search">
          <input type="text" autoComplete="off" onBlur={this.handleBlur} onFocus={this.handleFocus} id="search" value={this.state.value} onChange={this.handleChange} placeholder="Search by tags..." />
          {
            (showTypeAhead)? 
            <div className="header__typeahead">
              <div className="card__box">
                <ul>
                  {
                    filtered.map((key: string, index: number) => {
                      return (
                        <Tag tag={key} key={`${key}${index}`} onSelectTag={(tag: string)=>{this.onClickSelectTag(key)}} />
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
}

export default Header;
