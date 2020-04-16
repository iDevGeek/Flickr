import React, { Component, FormEventHandler, ChangeEvent } from 'react';

import './Header.scss';

type HeaderPropsType = {
  data: any,
  setKeyword(keyword: string): any
}

type HeaderStateType = {
  value: string,
}

class Header extends Component<HeaderPropsType, HeaderStateType> {
  constructor(props: HeaderPropsType) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const {value} = event.target;
    this.setState({value});
    this.props.setKeyword(value);
   
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <header className="header">

        <div className="header__search">
          <input type="text" id="search" value={this.state.value} onChange={this.handleChange} placeholder="Search by tags..." />
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
