import { combineReducers } from "redux";
import { increment, decrement, reset } from "./counter-actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
  step: 100,
};

const valueReducer = createReducer(initialState.value, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
  [reset]: (state, action) => 0,
});

const stepReducer = createReducer(initialState.step, {
  step: (state, action) => state,
});

export const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
