import axios from "axios";
import config from "../../config/config.json";
import {
  FETCH_BOOKLIST_REQUEST,
  FETCH_BOOKLIST_SUCCESS,
  FETCH_BOOKLIST_FAILURE,
  ADD_NEW_BOOK,
} from "./bookTypes";

// Action creaters
export const fetchBookListRequest = () => {
  return {
    type: FETCH_BOOKLIST_REQUEST,
  };
};
export const fetchBookListSuccess = (books) => {
  return {
    type: FETCH_BOOKLIST_SUCCESS,
    payload: books,
  };
};
export const fetchBookListFailure = (error) => {
  return {
    type: FETCH_BOOKLIST_FAILURE,
    payload: error,
  };
};

export const addNewBook = (book) => {
  return {
    type: ADD_NEW_BOOK,
    payload: book,
  };
};

//Async call
export const fetchBookList = () => {
  return (dispatch) => {
    dispatch(fetchBookListRequest());
    axios
      .get(`${config.apiEndPoint}`)
      .then((response) => {
        const bookList = response.data.items;
        dispatch(fetchBookListSuccess(bookList));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchBookListFailure(errorMessage));
      });
  };
};
