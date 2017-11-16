import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image } from 'semantic-ui-react';

import logo from '../../logo.svg';

const PageHeader = ({ text }) => (
  <Header as="h1" color="teal" textAlign="center">
    <Image src={logo} /> {text}
  </Header>
);

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeader;
