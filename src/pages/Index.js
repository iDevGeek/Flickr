import PropTypes from "prop-types";
import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as dataActions from '../actions/dataActions';
import ImageGallery from '../components/ImageGallery';

class IndexPage extends Component {
  
  constructor(props) {
    super(props);
  }

  getContent() {
    this.props.actions.loadData();
  }

  componentDidMount() {
    this.getContent();
  }

  render() {
    const {data} = this.props;
    if (!data.results) {
      return (
        <div>Loading</div>
      )
    }
    return (
      <div>
        <ImageGallery data={data.results} />
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.any,
  actions: PropTypes.object.isRequired,
  match: PropTypes.object
};


const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      ...bindActionCreators(dataActions, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
