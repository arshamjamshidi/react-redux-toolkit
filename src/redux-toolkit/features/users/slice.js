import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("users/fetchUsers", () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err.message)
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.loading = false;
      state.users = [];
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;

export const { clearUsers } = usersSlice.actions;
export { fetchUsers };

export const selectUsers = ({ users }) => users;
