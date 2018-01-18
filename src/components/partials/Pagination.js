import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
// import { Icon, Menu } from 'semantic-ui-react';

class Pagination extends Component {
  state = {
    pageCount: 1,
  };
  // constructor(props) {
  // super(props);
  // this.state = {
  //   thisPage: props.pager.page,
  //   nextPage: props.pager.nextPage,
  //   prevPage: props.pager.previousPage,
  //   totalPages: props.pager.pageCount,
  //   totalItems: props.pager.total,
  //   pages: this.rangeNumbers(1, props.pager.pageCount),
  // };

  // this.setState({
  //   pages: this.rangeNumbers(1, this.state.totalPages),
  // });
  // }

  // onNextPage = () => {
  //   const { nextPage } = this.state;
  //   if (nextPage) {
  //     console.log('next page: ', nextPage);
  //     this.updatePage(nextPage);
  //   }
  // };

  // onPrevPage = () => {
  //   const { prevPage } = this.state;
  //   if (prevPage) {
  //     console.log('prev page: ', prevPage);
  //     this.updatePage(prevPage);
  //   }
  // };

  // onGotoPage = (page) => {
  //   if (page) {
  //     console.log(page);
  //     this.updatePage(page);
  //   }
  // };

  // updatePage = thisPage => this.setState({ thisPage });

  // rangeNumbers = (startNumber, endNumber) => {
  //   const list = [];
  //   for (let i = startNumber; i <= endNumber; i++) {
  //     list.push(i);
  //   }
  //   return list;
  // };

  onPageChange = () => {};

  render() {
    // const { pages } = this.state;

    return (
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={<a href="">...</a>}
        breakClassName={'break-me'}
        pageCount={this.state.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.onPageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    );
  }
}

export default Pagination;
