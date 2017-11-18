import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';

import logo from '../../logo.svg';
import * as actions from '../../actions/auth';

const TopNavigation = ({ user, logout }) => (
  <div style={{ marginBottom: '50.73px' }}>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/adminz" header>
          <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as={Link} to="/adminz/posts">
          Posts
        </Menu.Item>
        <Menu.Item as={Link} to="/adminz/users">
          Users
        </Menu.Item>
        <Dropdown item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Dropdown
            trigger={<Image avatar src={gravatarUrl(user.email)} />}
            style={{ marginTop: '12px', color: 'white' }}
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);
