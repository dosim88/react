/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';

//import ErrorBlock from 'components/ui/form/ErrorBlock';

import classNames from 'classnames';

const validate = (values) => {
  const errors = {};

  //todo: нужно не выбрасывать исключение, а валидировать поле
  if (values && values.title.length < 5)
    throw new SubmissionError('Длина заголовка должна быть больше не менее 5 символов');

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={classNames('form-group', { error })}>
    <label>{label}</label>
    <input className="form-control" {...input} type={type} />
    {touched && (error && (
      <div className="ui red label">{error}</div>
    ))}
  </div>
);

const PostEdit = ({ handleSubmit, pristine, submitting, reset }) => {
  console.log('pristine:', pristine);
  console.log('submitting:', submitting);

  return (
    <div>
      <h1>Post Edit</h1>

      <form onSubmit={handleSubmit}>
        <Field label="Title" component={renderField} type="text" name="title"/>
        <Field label="Created At" component={renderField} type="text" name="createdAt"/>
        <Field label="Author" component={renderField} type="text" name="author"/>

        {(!pristine && !submitting) && <button className="btn btn-warning" onClick={reset}>Clear</button>}
        <input type="submit" className="btn btn-info" value="Update"/>
      </form>
    </div>
  )
};

const submit = (values) => {
  if (values.title.length < 5)
    throw new SubmissionError('Рекомендуемая длина заголовка должна быть больше чем 5 символов');
};

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.entry.title,
      author: state.post.entry.meta.author,
      createdAt: state.post.entry.meta.createdAt
    }
  })
  //(dispatch) => ({
  //  updatePost: flowRight(dispatch, updatePost)
  //})
)(reduxForm({
  form: 'editPost',
  validate,
  onSubmit: submit
})(PostEdit));