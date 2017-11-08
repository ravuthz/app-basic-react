import React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmEmailMessage = () => (
  <Message info>
    <Message.Header>Please verify your email address to unlock awesomeness</Message.Header>
  </Message>
);

ConfirmEmailMessage.displayName = 'ConfirmEmailMessage';

export default ConfirmEmailMessage;
