import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name }) => (
  <h3>{name}</h3>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired
};
export default Repo;
