import React from 'react';
import { Message } from 'semantic-ui-react';

const GlobalErrorMessage = errors => (
  <Message nagative>
    <Message.Header>Something went wrong</Message.Header>
    <p>{errors.global}</p>
  </Message>
);

GlobalErrorMessage.displayName = 'GlobalErrorMessage';

export default GlobalErrorMessage;
