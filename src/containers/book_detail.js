import React, {Component} from 'react';
import BookList from './book_list.js';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if(!this.props.book){
      return <div>Please select a book</div>
    }

    return(
      <h3>{this.props.book.title}</h3>
    )
  }

}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail);
