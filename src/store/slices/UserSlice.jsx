import { createSlice } from "@reduxjs/toolkit";

// Create a slice for managing user-related data in a Redux store so slice is in the store
const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState: [], // Initial state of the slice (empty array)
  reducers: {
    // Reducers define how the state should be updated in response to actions dispatched to the store
    addUser(state, action) {
      // Function to add a new user to the state

      state.push(action.payload);
    },
    removeUser(state, action) {
      // Function to remove a user from the state

      state.splice(action.payload,1)
    },
    deleteUsers(state, action) {
      // Function to delete all users from the state
      //return state =[];  we can do like that we not wants to
      return []
      console.log("deleteusers presed")
    },
  },
});

console.log(userSlice.actions);

export default userSlice.reducer;  //the reducer comes from the index.jsxfrom the store

export const {addUser,removeUser,deleteUsers} = userSlice.actions; //destructuring the addUSer from the userSlice.actios

/*
This code is creating a Redux slice for managing user-related data in a Redux store using the createSlice function from the @reduxjs/toolkit library.

The slice has a name of "user" and an initial state of an empty array. It has three reducers defined: addUser, removeUser, and deleteUsers.

The addUser reducer takes the current state and an action as arguments and appends the payload of the action to the state array.

The removeUser reducer takes the current state and an action as arguments and removes a user from the state array based on the index provided in the payload of the action.

The deleteUsers reducer takes the current state and an action as arguments and clears the state array.

Finally, the code exports the reducer from the slice, and also exports the addUser and removeUser actions from the slice, which can be used to dispatch actions to the store.

Example usage of this slice would be creating a Redux store using this reducer, and dispatching actions such as addUser or removeUser to update the state of the slice in the store. For instance, if you want to add a new user to the store, you can dispatch an action with addUser action creator along with the user data as payload like this:

less
Copy code
dispatch(addUser({id: 1, name: "John Doe", email: "john.doe@example.com"}));
This action will be handled by the addUser reducer in the user slice and append the new user object to the state array. Similarly, you can dispatch the removeUser action to remove a user from the store based on the index of the user in the state array.
 */