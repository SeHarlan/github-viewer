import React from 'react';
import PropTypes from 'prop-types';

const NameInput = ({ onButtonClick, onChange, username }) => (
  <>
    <button onClick={onButtonClick}>Submit</button>
    <input type="text" name="username" value={username} onChange={onChange} />
    <select name="openOrClosed" id="openOrClosed" onChange={onChange}>
      <option value={null}>All PRs</option>
      <option value="closed">Closed PRs</option>
      <option value="open">Open PRs</option>
    </select>
  </>
);

NameInput.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};



export default NameInput;
