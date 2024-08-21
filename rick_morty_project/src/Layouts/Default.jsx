import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import App from "../App";

import MenuList from '../components/MenuList';
import CharPanel from '../pages/CharPanel';

function DefaultLayout() {

  return (
    <Box sx={{ flexGrow: 1, height: 'inherit' }}>
      <Grid container spacing={0} sx={{height: 'inherit'}}>
        <Grid item xs={2} sx={{height: 'inherit', backgroundColor:'#3A3A3A', overflow: 'auto'}}>
          <MenuList></MenuList>
        </Grid>
        <Grid item xs sx={{height: 'inherit', display: 'flex', flexDirection: 'column', padding:5}}>
          <CharPanel />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DefaultLayout;
