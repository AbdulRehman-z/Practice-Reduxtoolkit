import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

const SongPlaylist = () => {
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
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add item
        </Button>
      </Box>
    </Box>
  );
};

export default SongPlaylist;

// <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Avatar with text and icon
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem
//                   secondaryAction={
//                     <IconButton edge="end" aria-label="delete">
//                       <DeleteIcon />
//                     </IconButton>
//                   }
//                 >
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
