import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// the global store setup

// inside this whole store we have one slice = basket slice (relevant info for basket)
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
