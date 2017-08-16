import { connect } from 'react-redux';

import PostCreate from 'components/views/postCreate/index';
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
      title: '',
      imageSrc: '',
      imageAlt: '',
      author: ''
    }
  })
)(reduxForm({
  form: 'createPost',
  validate,
  onSubmit: submit
})(PostCreate));