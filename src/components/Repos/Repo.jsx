import React from 'react';
import PropTypes from 'prop-types';
import Pulls from '../Pulls/Pulls.jsx';

const Repo = ({ name, pulls, closedOrOpen }) => {

  return (
    <>
      <h3>{name}</h3>
      <Pulls pulls={pulls} closedOrOpen={closedOrOpen} />
    </>
  );};

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  pulls: PropTypes.array,
  closedOrOpen: PropTypes.string
};
export default Repo;
