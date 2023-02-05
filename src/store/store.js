import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice
  },
});

export default store;
