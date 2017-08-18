import React, { PropTypes } from 'react';

import { Field } from 'redux-form';

import InputField from 'components/ui/form/InputField';

const PostEditForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <form onSubmit={handleSubmit}>
    <Field label="Title" component={InputField} type="text" name="title"/>
    <Field label="Created At" component={InputField} type="text" name="createdAt"/>
    <Field label="Author" component={InputField} type="text" name="author"/>

    {
      (!pristine && !submitting)
      && <button className="btn btn-basic" onClick={reset}>Clear</button>
    }
    <input type="submit" className="btn btn-info" value="Update"/>
  </form>
);


PostEditForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func
};

export default PostEditForm;