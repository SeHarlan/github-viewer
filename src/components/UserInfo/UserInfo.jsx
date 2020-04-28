import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ name, followersCount, followingCount, githubLink }) => (
  <>
    <h1>{name}</h1>
    <p>Followers: {followersCount}</p>
    <p>Following: {followingCount}</p>
    <a href={githubLink}>Github Profile</a>
  </>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired
};

export default UserInfo;
