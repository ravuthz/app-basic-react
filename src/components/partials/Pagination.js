import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisPage: 1,
      nextPage: 2,
      prevPage: 0,
      totalPages: 10,
    };
  }

  onNextPage = () => {
    const { nextPage } = this.state;
    if (nextPage) {
      this.updatePage(nextPage);
    }
  };

  onPrevPage = () => {
    const { prevPage } = this.state;
    if (prevPage) {
      this.updatePage(prevPage);
    }
  };

  onGotoPage = (page) => {
    if (page) {
      this.updatePage(page);
    }
  };

  updatePage = thisPage => this.setState({ thisPage });

  render() {
    const { totalPages } = this.state;
    return (
      <Menu floated="right" pagination>
        <Menu.Item as="a" icon onClick={this.onNextPage}>
          <Icon name="left chevron" />
        </Menu.Item>
        {Array(totalPages).map(index => (
          <Menu.Item as="a" onClick={this.onGotoPage(index)}>
            {index}
          </Menu.Item>
        ))}
        <Menu.Item as="a" icon onClick={this.onPrevPage}>
          <Icon name="right chevron" />
        </Menu.Item>
      </Menu>
    );
  }
}
