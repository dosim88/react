import React, { PropTypes } from 'react';

import ErrorBlock from 'components/ui/form/ErrorBlock';
import classNames from 'classnames';

const Text = ({ name, value, onChange, label, error }) => {
  const className = error
    ? classNames('form-group', 'has-error')
    : 'form-group';

  return (
    <div className={className}>
      <label htmlFor={name}>{label}:</label>
      <input
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <ErrorBlock message={error} />
    </div>
  );
};

export default Text