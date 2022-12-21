import { configureStore } from "@reduxjs/toolkit";
import { reset } from "./actions/action";
import { addMovie, removeMovie, movieReducer } from "./reducers/movie.reducer";
import { addSong, removeSong, songReducer } from "./reducers/song.reducer";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer,
  },
});

export { store, addMovie, removeMovie, addSong, removeSong, reset };
