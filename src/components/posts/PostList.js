import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react';

class PostList extends Component {
  componentDidMount() {
    console.log('PostList componentDidMount. ', this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('PostList componentWillReceiveProps. ', nextProps);
  }

  excute = () => {
    const allPage = Array(this.state.pageCount);
    this.setState({ allPage });
  };

  tableHeaders = rows => (
    <Table.Row>
      {rows.map((row, index) => <Table.HeaderCell key={index}>{row}</Table.HeaderCell>)}
    </Table.Row>
  );

  tableRecords = posts =>
    posts.map(post => (
      <Table.Row key={post.id}>
        <Table.Cell>{post.title}</Table.Cell>
        <Table.Cell>{post.userId}</Table.Cell>
        <Table.Cell>
          <Link to={`/adminz/posts/${post.id}/edit`}>
            <Icon size="large" name="edit" />
          </Link>
          <Link to={`/adminz/posts/${post.id}/show`}>
            <Icon color="green" size="large" name="unhide" />
          </Link>
        </Table.Cell>
      </Table.Row>
    ));

  tableFooters = rows => (
    <Table.Row>
      <Table.HeaderCell colSpan="2">
        <Menu floated="right" pagination>
          <Menu.Item as="a" icon>
            <Icon name="left chevron" />
          </Menu.Item>
          {rows.map((row, index) => (
            <Menu.Item as="a" key={index}>
              {row}
            </Menu.Item>
          ))}
          <Menu.Item as="a" icon>
            <Icon name="right chevron" />
          </Menu.Item>
        </Menu>
      </Table.HeaderCell>
    </Table.Row>
  );

  render() {
    const { headers, records, footers } = this.props;

    return (
      <div>
        <Table celled>
          <Table.Header>{this.tableHeaders(headers)}</Table.Header>
          <Table.Body>{this.tableRecords(records)}</Table.Body>
          <Table.Footer>{this.tableFooters(footers)}</Table.Footer>
        </Table>
      </div>
    );
  }
}

PostList.propTypes = {
  headers: PropTypes.array.isRequired,
  records: PropTypes.array.isRequired,
  footers: PropTypes.array.isRequired,
};

export default PostList;
