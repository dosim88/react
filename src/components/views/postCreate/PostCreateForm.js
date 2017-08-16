import React, { PropTypes } from 'react';

import { Field } from 'redux-form';

import InputField from 'components/ui/form/InputField';

const PostEditForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field label="Title" component={InputField} type="text" name="title"/>
    <Field label="Image Src" component={InputField} type="text" name="imageSrc"/>
    <Field label="Image Alt" component={InputField} type="text" name="imageAlt"/>
    <Field label="Author" component={InputField} type="text" name="author"/>

    <input type="submit" className="btn btn-info" value="Submit"/>
  </form>
);


PostEditForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default PostEditForm;