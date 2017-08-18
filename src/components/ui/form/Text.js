import React, { PropTypes } from 'react';

import ErrorBlock from 'components/ui/form/ErrorBlock';
import classNames from 'classnames';

const Text = ({ name, value, onChange, label, error }) => (
  <div className={classNames('form-group', {'has-error': error})}>
    <label>{label}:</label>
    <input
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    />
    <ErrorBlock message={error}/>
  </div>
);


Text.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string
};

export default Text;