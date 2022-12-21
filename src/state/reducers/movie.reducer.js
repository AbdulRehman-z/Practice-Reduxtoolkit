import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      const index = state.indexOf(action.payload);
      const removeMovie = state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase("app/reset", (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer;
