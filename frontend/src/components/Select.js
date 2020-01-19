import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  return(
    <div className="form-group">
      <label htmlFor={props.name}> {props.title} </label>
      <select
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        <option value="" disabled>{props.placeholder}</option>
        {props.options.map(option => {
          return (
            <option
              key={option}
              value={option}
              label={option}>{option}
            </option>
          );
        })}
      </select>
    </div>)
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Select;