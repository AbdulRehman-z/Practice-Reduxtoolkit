import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MoviePlaylist from "./components/movieComponent";
import SongPlaylist from "./components/songComponent";

import { Button } from "@mui/material";
import RestartAltOutlined from "@mui/icons-material/RestartAltOutlined";
function App() {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          marginRight: "auto",
          borderRadius: "10px",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        maxWidth="xl"
      >
        <Button
          variant="contained"
          color="warning"
          startIcon={<RestartAltOutlined />}
          sx={{
            marginRight: "auto",
          }}
        >
          Reset both playlists
        </Button>
        <MoviePlaylist />
        <SongPlaylist />
      </Container>
    </>
  );
}

export default App;
