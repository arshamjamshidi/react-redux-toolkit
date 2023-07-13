import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/slice";
import usersReducer from "../features/users/slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export default store;
