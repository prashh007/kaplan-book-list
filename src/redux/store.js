import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import bookReducer from "./books/bookReducer";

const store = createStore(bookReducer, applyMiddleware(logger, thunk));

export default store;
