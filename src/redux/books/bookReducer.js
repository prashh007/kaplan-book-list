import {
  FETCH_BOOKLIST_SUCCESS,
  FETCH_BOOKLIST_FAILURE,
  FETCH_BOOKLIST_REQUEST,
  ADD_NEW_BOOK,
} from "./bookTypes";

const initialState = {
  isLoading: true,
  bookList: [],
  error: "",
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKLIST_REQUEST:
      return {
        ...state,
      };
    case FETCH_BOOKLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bookList: action.payload,
        error: "",
      };
    case FETCH_BOOKLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        bookList: [],
        error: action.payload,
      };
    case ADD_NEW_BOOK:
      let newBook = [...state.bookList];
      return {
        ...state,
        bookList: [action.payload, ...newBook],
      };

    default:
      return state;
  }
};

export default bookReducer;
