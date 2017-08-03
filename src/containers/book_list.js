import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from './../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  constructor() {
    super();
  }
  render() {
    let books = this.props.books.map((book, index)=>{
      return(
        <li key={index} onClick={ () => this.props.selectBook(book)}>{book.title}</li>
      )
    })
    // let books = this.props.books.map((book, index)=>{
    //   return(
    //     <li onClick={ ()=>this.props.selectBook(book) } key={index}>{book.title}</li>
    //   );
    // });
    return(
    <div>
      <ul>
        {books}
      </ul>
    </div>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
