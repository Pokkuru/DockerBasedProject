import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function HeaderContents(props) {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="static">
          <Typography
            variant="h6"
            component="div"
            sx={{ paddingLeft: "1em" }}>
            {props.HeaderTitle}
          </Typography>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default HeaderContents;
