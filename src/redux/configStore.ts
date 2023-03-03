import arrProduct from "./reducers/productReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    arrProduct: arrProduct,
  },
});

// Lấy type của state
export type RootState = ReturnType<typeof store.getState>;

// Lấy type của dispatch
export type AppDispatch = typeof store.dispatch;
