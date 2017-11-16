import React from 'react';
import PropTypes from 'prop-types';

const BasePropsPage = () => <div />;

BasePropsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default BasePropsPage;
