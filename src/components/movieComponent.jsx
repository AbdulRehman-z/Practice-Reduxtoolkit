import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../state/store.js";
import { DeleteOutline } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { createRandomMovie } from "../data/fakeData.js";

const MoviePlaylist = () => {
  const dispatch = useDispatch();
  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleAddMovie = (movie) => {
    return dispatch(addMovie(movie));
  };

  const handleRemoveMovie = (movie) => {
    return dispatch(removeMovie(movie));
  };

  return (
    <Box
      sx={{
        minHeight: 300,
        width: "100%",
        backgroundColor: "#e3f2fd",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1rem",
        }}
      >
        <Typography variant="h4">Movies Playlist</Typography>
        <Button
          onClick={() => handleAddMovie(createRandomMovie())}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add item
        </Button>
      </Box>

      <List>
        {moviePlaylist.map((movie) => {
          return (
            <ListItem
              sx={{
                borderRadius: "7px",
                bgcolor: "#90caf9",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 1rem",
              }}
            >
              <Typography variant="h6">{movie}</Typography>
              <Button
                onClick={() => handleRemoveMovie(movie)}
                variant="contained"
                color="error"
                startIcon={<DeleteOutline />}
              >
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default MoviePlaylist;
