import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisPage: props.pager.page,
      nextPage: props.pager.nextPage,
      prevPage: props.pager.previousPage,
      totalPages: props.pager.pageCount,
      totalItems: props.pager.total,
      pages: this.rangeNumbers(1, props.pager.pageCount),
    };

    // this.setState({
    //   pages: this.rangeNumbers(1, this.state.totalPages),
    // });
  }

  onNextPage = () => {
    const { nextPage } = this.state;
    if (nextPage) {
      console.log('next page: ', nextPage);
      this.updatePage(nextPage);
    }
  };

  onPrevPage = () => {
    const { prevPage } = this.state;
    if (prevPage) {
      console.log('prev page: ', prevPage);
      this.updatePage(prevPage);
    }
  };

  onGotoPage = (page) => {
    if (page) {
      console.log(page);
      this.updatePage(page);
    }
  };

  updatePage = thisPage => this.setState({ thisPage });

  rangeNumbers = (startNumber, endNumber) => {
    const list = [];
    for (let i = startNumber; i <= endNumber; i++) {
      list.push(i);
    }
    return list;
  };

  render() {
    const { pages } = this.state;

    return (
      <Menu floated="right" pagination>
        <Menu.Item as="a" icon onClick={this.onNextPage}>
          <Icon name="left chevron" />
        </Menu.Item>
        {pages.map(index => (
          <a className="item" onClick={() => this.onGotoPage(index)}>
            {index}
          </a>
        ))}
        <Menu.Item as="a" icon onClick={this.onPrevPage}>
          <Icon name="right chevron" />
        </Menu.Item>
      </Menu>
    );
  }
}

Pagination.propTypes = {
  pager: PropTypes.shape({
    page: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    previousPage: PropTypes.number.isRequired,
    nextPage: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pagination;
