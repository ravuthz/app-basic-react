import React from 'react';
import { Message } from 'semantic-ui-react';

const WelcomeMessage = () => (
  <Message>
    <Message.Header>Welcome Message</Message.Header>
    <Message.Content>Welcome to dashboard page</Message.Content>
  </Message>
);

WelcomeMessage.displayName = 'WelcomeMessage';

export default WelcomeMessage;
