import React from 'react';
import PropTypes from 'prop-types';
import Pull from './Pull.jsx';

const Pulls = ({ pulls, closedOrOpen }) => {
  //state can be closed or open
  const pullElements = pulls
    .filter(pull => {
      if(closedOrOpen) return (pull.state === closedOrOpen);
      return true;
    })
    .map(pull => <Pull key={pull.id} pullNumber={pull.number} pullBody={pull.body}/>);
  return <ul>{pullElements}</ul>;
};

Pulls.propTypes = {
  pulls: PropTypes.array.isRequired,
  closedOrOpen: PropTypes.string
};

export default Pulls;
