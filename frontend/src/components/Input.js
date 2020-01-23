import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <div className="input-component">
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  )
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Input;