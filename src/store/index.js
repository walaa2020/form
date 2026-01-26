import { configureStore } from "@reduxjs/toolkit";
import saveInfoSlice from "./data/dataSlice"
export const store = configureStore({
  reducer: {
info:saveInfoSlice
  },
})