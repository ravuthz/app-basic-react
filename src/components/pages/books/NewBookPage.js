import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import BookForm from '../../forms/BookForm';
import SearchBookForm from '../../forms/SearchBookForm';

export default class componentName extends Component {
  state = {
    book: null,
  };

  onBookSelect = book => this.setState({ book });

  addBook = () => console.log('hi addBook');

  render() {
    const { book } = this.state;
    return (
      <Segment>
        <h1>Add new book to your collection</h1>
        <SearchBookForm onBookSelect={this.onBookSelect} />
        {book && <BookForm book={book} submit={this.addBook} />}
      </Segment>
    );
  }
}
