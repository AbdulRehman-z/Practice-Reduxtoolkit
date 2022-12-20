import { Button, List, ListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { createRandomSong } from "../data/fakeData.js";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../state/store.js";
import { DeleteOutline } from "@mui/icons-material";

const SongPlaylist = () => {
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state) => {
    console.log(state);
    return state.song;
  });

  const handleAddSong = (song) => {
    return dispatch(addSong(song));
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
        <Typography variant="h4">Songs Playlist</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleAddSong(createRandomSong)}
        >
          Add item
        </Button>
      </Box>

      <List>
        {songPlaylist.map((song) => {
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
              <Typography variant="h6">{song}</Typography>
              <Button
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

export default SongPlaylist;
