import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("counter/Increment");
export const decrement = createAction("counter/Decrement");
export const reset = createAction("counter/Reset");

// console.log(increment(5)); // {type: "timer/increment", payload: 5}
