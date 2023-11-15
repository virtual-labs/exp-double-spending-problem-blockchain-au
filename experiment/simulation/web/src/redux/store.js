import { configureStore } from "@reduxjs/toolkit";
import DoubleSpendingReducer from "./slices/doubleSpendingSlice";

export const store = configureStore({
  reducer: { DoubleSpendingReducer },
  //   middleware: "if any"
});
