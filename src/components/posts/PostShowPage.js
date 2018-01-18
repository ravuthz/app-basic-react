import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as postActions from '../../actions/post';
import PageHeader from '../partials/PageHeader';

class PostShowPage extends Component {
  componentWillMount = () => {
    this.props.showPost(this.props.match.params.id).then((res) => {
      console.log('res: ', res);
    });
  };

  render() {
    return (
      <div>
        <PageHeader text="Detail this post" />
      </div>
    );
  }
}

PostShowPage.propTypes = {
  showPost: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // history: PropTypes.shape({
  //   push: PropTypes.func.isRequired,
  // }).isRequired,
};

export default connect(null, { ...postActions })(PostShowPage);
