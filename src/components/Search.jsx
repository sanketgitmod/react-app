import { IconButton, InputBase, Paper } from "@mui/material";
import classes from "./Search.module.css";

import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <Paper
      component="form"
      sx={{
        p: "6px 6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        my: 10,
      }}
      className={classes.width}
    >
      <InputBase sx={{ ml: 3, flex: 1 }} placeholder="Search city" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
