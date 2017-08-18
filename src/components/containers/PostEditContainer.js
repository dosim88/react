import { connect } from 'react-redux';

import PostEdit from 'components/views/postEdit/index';
import { reduxForm } from 'redux-form';


const validate = (values) => {
  const errors = {};

  for (const k in values) {
    if (values[k].length <= 0)
      errors[k] = 'Поле обязательно для заполнения';
  }

  return errors;
};

const submit = (values) => {
  alert(JSON.stringify(values));
};

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.entry && state.post.entry.title,
      author: state.post.entry && state.post.entry.meta.author,
      createdAt: state.post.entry && state.post.entry.meta.createdAt
    }
  })
)(reduxForm({
  form: 'editPost',
  validate,
  onSubmit: submit,
  enableReinitialize: true
})(PostEdit));