// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { applyMiddleware, createStore } from "redux";

import { rootReducer } from "../reducers/rootReducer";
import { validateAuthorMiddleware } from "../middleware/validateAuthorMiddleware";

export const store = createStore(
  rootReducer,
  applyMiddleware(validateAuthorMiddleware)
);
