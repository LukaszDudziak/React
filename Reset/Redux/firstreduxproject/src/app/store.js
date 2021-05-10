// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { createStore } from "redux";

import { rootReducer } from "../reducers/rootReducer";

export const store = createStore(rootReducer);
