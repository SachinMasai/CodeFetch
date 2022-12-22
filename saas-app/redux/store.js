import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
});

// config the store
const store = configureStore({
  reducer: rootReducer,
});

// export default the store
export default store;
