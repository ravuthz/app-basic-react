import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';

import api from '../../api';

class SearchBookForm extends Component {
  state = {
    query: '',
    books: {},
    options: [],
    loading: false,
  };

  onChange = (e, { value }) => {
    this.setState({ query: value });
    this.props.onBookSelect(this.state.books[value]);
  };

  onSearchChange = (e, data) => {
    // clearTimeout(this.timer);
    console.log('data: ', data.searchQuery);
    this.setState({
      query: data.searchQuery,
    });
    // this.timer = setTimeout(() => this.fetchOptions, 500);
    // setTimeout(() => this.fetchOptions, 500);
    this.fetchOptions();
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });

    api.book.search(this.state.query).then((books) => {
      const options = [];
      const booksHash = {};
      books.forEach((book) => {
        booksHash[book.goodreadsId] = book;
        options.push({
          key: book.goodreadsId,
          value: book.goodreadsId,
          text: book.title,
        });
      });
      this.setState({ loading: false, options, books: booksHash });
    });
  };

  render() {
    const { query, loading, options } = this.state;
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="Search for a book by title"
          value={query}
          onSearchChange={this.onSearchChange}
          options={options}
          loading={loading}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

SearchBookForm.propTypes = {
  onBookSelect: PropTypes.func.isRequired,
};

export default SearchBookForm;
