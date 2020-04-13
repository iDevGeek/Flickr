import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Views.scss';

import {formatNumber} from '../../utils/formatter';

const Views = ({views}) => {
  return (
     <span className="card__views">
        <span className="card__views--icon">
          <svg viewBox="0 0 24 24" id="icon-view">
            <path d="M3.336 12.447c1.955 2.7 4.712 5.454 8.678 5.454 3.988 0 6.75-2.773 8.7-5.482.147-.2.438-.59 0-1.2-1.942-2.722-4.718-5.487-8.7-5.487-3.973 0-6.723 2.757-8.678 5.454-.458.632-.153 1.05 0 1.263M12.014 20c-4.033 0-7.443-2.372-10.6-6.948-.198-.288-.823-1.322 0-2.467 3.266-4.533 7.046-6.953 10.6-6.953 3.563 0 7.38 2.406 10.623 6.988.712 1.008.19 2.123 0 2.4C19.48 17.62 16.056 20 12.013 20zM12 7.218c-2.43 0-4.4 2.03-4.4 4.533 0 2.505 1.97 4.534 4.4 4.534 2.43 0 4.4-2.03 4.4-4.533 0-2.503-1.97-4.532-4.4-4.532zm0 7.244c-1.413 0-2.563-1.216-2.563-2.71 0-1.496 1.15-2.712 2.562-2.712 1.413 0 2.563 1.216 2.563 2.71 0 1.496-1.15 2.712-2.564 2.712z"></path></svg>
        </span>
        <span className="card__views--text">
          {formatNumber(views)} views
        </span>
      </span>
  )
}

Views.propTypes = {
  views: PropTypes.string.isRequired
};

export default Views;