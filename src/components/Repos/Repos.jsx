import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo.jsx';

const Repos = ({ repos, closedOrOpen }) => {
  const repoElements = repos.map(repo => (
    <li key={repo.name}>
      <Repo {...repo} closedOrOpen={closedOrOpen} />
    </li>
  ));
  return (
    <ul>
      {repoElements}
    </ul>
  );
};


Repos.propTypes = {
  repos: PropTypes.array.isRequired,
  closedOrOpen: PropTypes.string
};

export default Repos;
