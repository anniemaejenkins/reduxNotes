import React, { Component } from 'react';
import './../App.css';

import BookList from './../containers/book_list.js';
import BookDetail from './../containers/book_detail.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
