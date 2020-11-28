import React, { Component } from "react";
import Modal from "react-modal";
import InputLabel from "../common/InputLabel";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class AddBook extends Component {
  state = {
    newBook: { title: "", author: "", publisher: "" },
    errors: {},
  };

  //Basic form validation
  validateForm = () => {
    const errors = {};
    const { newBook } = this.state;

    if (newBook.title.trim() === "") {
      errors.title = "Title is required.";
    }
    if (newBook.author.trim() === "") {
      errors.author = "Author is required.";
    }
    if (newBook.publisher.trim() === "") {
      errors.publisher = "Publisher is required.";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  // handling an event on submitting form.
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.props.onSave(this.state.newBook);
    this.props.onClose();
    this.handleReset();
  };

  // validating each input on change.
  validateFormProperty = ({ name, value }) => {
    if (name === "title") {
      if (value.trim() === "") return "Title is required.";
    }
    if (name === "author") {
      if (value.trim() === "") return "Author is required.";
    }
    if (name === "publisher") {
      if (value.trim() === "") return "Publisher is required.";
    }
  };

  //handling event on change of each input.
  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateFormProperty(input);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    const newBook = { ...this.state.newBook };
    newBook[name] = value;
    this.setState({ newBook, errors });
  };

  // Resetting the form after submitt.
  handleReset = () => {
    const newBook = { ...this.state.newBook };
    for (let item in newBook) {
      newBook[item] = "";
    }
    this.setState({ newBook });
  };

  // rendering modal with from.
  render() {
    const { newBook, errors } = this.state;
    return (
      <Modal
        isOpen={this.props.isAdd}
        ariaHideApp={false}
        contentLabel="Add a book"
        style={customStyles}
      >
        <h4>Add a book</h4>
        <form onSubmit={this.handleSubmit}>
          <InputLabel
            name="title"
            label="Title"
            value={newBook.title}
            onChange={this.handleChange}
            error={errors.title}
          />
          <InputLabel
            name="author"
            label="Author"
            value={newBook.author}
            onChange={this.handleChange}
            error={errors.author}
          />

          <InputLabel
            name="publisher"
            label="Publisher"
            value={newBook.publisher}
            onChange={this.handleChange}
            error={errors.publisher}
          />
          <button
            type="button"
            onClick={this.props.onClose}
            className="btn btn-primary mr-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={this.validateForm()}
            className="btn btn-primary"
          >
            Add book
          </button>
        </form>
      </Modal>
    );
  }
}

export default AddBook;
