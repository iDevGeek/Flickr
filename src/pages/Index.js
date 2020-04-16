import PropTypes from "prop-types";
import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as dataActions from '../actions/dataActions';
import * as searchActions from '../actions/searchActions';
import ImageGallery from '../components/ImageGallery';
import Header from '../components/Header';

class IndexPage extends Component {

  getContent() {
    this.props.actions.loadData();
  }

  componentDidMount() {
    this.getContent();
  }

  render() {
    const {data, keyword, actions} = this.props;
    if (!data.results) {
      return (
        <div className="page page--loading">Loading</div>
      )
    }
    return (
      <div className="page">
        <Header data={data} setKeyword={actions.setKeyword} /> 
        <section className="content">
          <ImageGallery data={data.results} keyword={keyword} />
        </section>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.any,
  keyword: PropTypes.string,
  actions: PropTypes.object.isRequired,
  match: PropTypes.object
};


const mapStateToProps = (state) => {
  return {
    keyword: state.search.keyword,
    data: state.data,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      ...bindActionCreators(dataActions, dispatch),
      ...bindActionCreators(searchActions, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
