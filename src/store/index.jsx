import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

// Configure the Redux store with the user slice as the reducer

const store = configureStore({
  reducer: {
    users: userSlice, // The "users" slice is managed by the userSlice reducer
  },
});

// Export the store instance as the default export
export default store;

/* 

This code is configuring a Redux store using the configureStore function from the @reduxjs/toolkit package. The store is configured with a reducer named "users", which is managed by the userSlice reducer imported from "./slices/UserSlice". Once configured, the store instance is exported as the default export from this module, allowing other parts of the application to import and use the store as needed.

*/