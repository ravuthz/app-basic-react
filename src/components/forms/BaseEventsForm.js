import { Component } from 'react';
import PropTypes from 'prop-types';

class BaseEventsForm extends Component {
  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });

      this.props.submit(this.state.data).then(
        () => {
          this.setState({
            errors: null,
            loading: false,
          });
        },
        (err) => {
          this.setState({
            errors: err.response.data.errors,
            loading: false,
          });
        },
      );
    }
  };
}

BaseEventsForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default BaseEventsForm;
