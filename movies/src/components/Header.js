import React, { useState } from "react";
import {
  AppBar,
  Autocomplete,
  Box,
  Toolbar,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
const dummyArray = ["abc", "your mother", "LMAO"];
const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <AppBar>
      <Toolbar>
        <Box width={"20%"}>
          <MovieIcon />
        </Box>
        <Box width={"50%"} margin={"1%"}>
          <Autocomplete
            freeSolo
            options={dummyArray.map((option) => option)}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                label="Search across multiple movies"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Movies" />
            <Tab label="Admin" />
            <Tab label="Login" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
