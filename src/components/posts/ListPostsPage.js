import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, Menu, Table } from 'semantic-ui-react';

import { listPosts } from '../../actions/post';
import PageHeader from '../partials/PageHeader';

class ListPostsPage extends Component {
  state = {
    data: {
      title: '',
      content: '',
    },
    posts: [],
    loading: true,
    success: false,
  };

  componentDidMount() {
    this.props.list().then((res) => {
      console.log('res', res);
      this.setState({
        posts: res.posts,
      });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <PageHeader text="Post Listing" />
        <Link to="/dashboard/posts/new">Create new post ??</Link>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>User ID</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {posts.map(post => (
              <Table.Row key={post._id}>
                <Table.Cell>{post.title}</Table.Cell>
                <Table.Cell>{post.userId}</Table.Cell>
                <Table.Cell>
                  <Link to={`/dashboard/posts/${post._id}/edit`}>
                    <Icon size="large" name="edit" />
                  </Link>
                  <Link to={`/dashboard/posts/${post._id}/show`}>
                    <Icon color="green" size="large" name="unhide" />
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="2">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="left chevron" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="right chevron" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

ListPostsPage.propTypes = {
  list: PropTypes.func.isRequired,
};

export default connect(null, { list: listPosts })(ListPostsPage);
