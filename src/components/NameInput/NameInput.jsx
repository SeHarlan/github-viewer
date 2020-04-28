import React from 'react';
import PropTypes from 'prop-types';

const NameInput = ({ onButtonClick, onChange, username }) => (
  <>
    <button onClick={onButtonClick}>Submit</button>
    <input type="text" name="username" value={username} onChange={onChange} />
  </>
);

NameInput.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};



export default NameInput;
