import React, { PropTypes } from 'react';

import ErrorBlock from 'components/ui/form/ErrorBlock';

import classNames from 'classnames';

const InputField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={classNames('form-group', {'has-error': error})}>
    <label>{label}</label>
    <input className="form-control" {...input} type={type}/>
    {touched && (error && (
      <ErrorBlock message={error}/>
    ))}
  </div>
);


InputField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default InputField;