import { counterReducer } from "./counter/counter-reducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
