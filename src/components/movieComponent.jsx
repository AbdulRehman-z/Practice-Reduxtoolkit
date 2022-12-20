import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

const MoviePlaylist = () => {
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
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add item
        </Button>
      </Box>
    </Box>
  );
};

export default MoviePlaylist;
