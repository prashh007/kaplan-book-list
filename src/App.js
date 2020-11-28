import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBookList, addNewBook } from "./redux/index";
import NavBar from "./components/Navbar";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import ErrorMessage from "./common/ErrorMessage";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    isBookAdd: false,
    searchQuery: "",
  };

  componentDidMount() {
    this.props.fetchBookList();
  }

  handleAddBook = () => {
    this.setState({ isBookAdd: !this.state.isBookAdd });
  };

  handleSave = (book) => {
    book.publishedDate = new Date().toLocaleDateString();
    this.props.addNewBook(book);
  };
  handleonSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  getBooksData = () => {
    const { searchQuery } = this.state;
    let books;
    if (searchQuery && searchQuery.length >= 2) {
      books =
        this.props.bookList &&
        this.props.bookList.filter((book) =>
          book.volumeInfo
            ? book.volumeInfo.title
                .toLowerCase()
                .startsWith(searchQuery.toLocaleLowerCase()) ||
              book.volumeInfo.authors[0]
                .toLowerCase()
                .startsWith(searchQuery.toLocaleLowerCase()) ||
              book.volumeInfo.publisher
                .toLowerCase()
                .startsWith(searchQuery.toLocaleLowerCase())
            : book.author
                .toLowerCase()
                .startsWith(searchQuery.toLocaleLowerCase())
        );
    } else {
      books = (this.props.bookList && this.props.bookList) || [];
    }
    return { allbooks: books };
  };

  render() {
    const { isLoading, error } = this.props;
    const { isBookAdd, searchQuery } = this.state;
    const { allbooks } = this.getBooksData();
    return (
      <div>
        <NavBar
          loading={isLoading}
          error={error}
          onAddBook={this.handleAddBook}
        />
        <AddBook
          isAdd={isBookAdd}
          onClose={this.handleAddBook}
          onSave={this.handleSave}
        />
        {!error ? (
          <BookList
            books={allbooks}
            value={searchQuery}
            onSearch={this.handleonSearch}
            isLoading={isLoading}
          />
        ) : (
          <ErrorMessage error={error} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoading, bookList, error } = state;
  return {
    isLoading,
    bookList,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookList: () => dispatch(fetchBookList()),
    addNewBook: (book) => dispatch(addNewBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
