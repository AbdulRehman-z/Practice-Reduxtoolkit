import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      console.log("action.payload", action.payload);
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      const index = state.indexOf(action.payload);
      const removeSong = state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase("app/reset", (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songSlice.actions;
export const songReducer = songSlice.reducer;
