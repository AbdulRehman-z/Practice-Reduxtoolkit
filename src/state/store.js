import { configureStore, createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      // state.splice(action.payload, 1);
    },
  },
});

export const store = configureStore({
  reducer: {
    song: songSlice.reducer,
  },
});

store.dispatch(songSlice.actions.addSong("Despacito"));

console.log(store.getState());

export const { addSong } = songSlice.actions;
