import React from 'react';

import { set, assign, keys } from 'lodash/object';

import Text from 'components/ui/form/Text';
import TextArea from 'components/ui/form/TextArea';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: { fullName: '', email: '', message: '' },
        errors: {}
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const isValid = this.validation(this.state.form.values);

    if (!isValid) return;

    alert(JSON.stringify(this.state.form.values));
  }

  updateState(path, value) {
    this.setState(
      set(assign({}, this.state), path, value)
    );
  }

  validation(values) {
    let errors = {};

    for(let k in values) {
      if (values[k].length <= 0)
        errors[k] = 'Поле обязательно для заполнения';
    }

    this.updateState(['form', 'errors'], errors);

    return keys(errors).length > 0
      ? false
      : true;
  }

  handleChange(fieldName) {
    return (e) => this.updateState(['form', 'values', fieldName], e.target.value);
  }

  render() {
    const { fullName, email, message } = this.state.form.values;

    return (
      <form onSubmit={this.onSubmit}>
        <Text
          name="fullName"
          label="Full name"
          value={fullName}
          error={this.state.form.errors.fullName}
          onChange={this.handleChange('fullName')}
        />
        <Text
          name="email"
          label="Email"
          value={email}
          error={this.state.form.errors.email}
          onChange={this.handleChange('email')}
        />
        <TextArea
          name="message"
          label="Message"
          value={message}
          error={this.state.form.errors.message}
          onChange={this.handleChange('message')}
        />
        <input type="submit" value="Submit" className="btn btn-info" />
      </form>
    );
  }
}

export default ContactForm;