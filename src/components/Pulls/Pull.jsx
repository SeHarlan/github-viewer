import React from 'react';
import PropTypes from 'prop-types';

const Pull = ({ pullBody, pullNumber }) => (
  <em>{pullNumber}: {pullBody}</em>
);

Pull.propTypes = {
  pullBody: PropTypes.string.isRequired,
  pullNumber: PropTypes.number.isRequired
};

export default Pull;
