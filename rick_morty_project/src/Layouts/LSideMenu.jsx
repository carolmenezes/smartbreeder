import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export function LeftSlot({children}){
    return(
        <Fragment>{children}</Fragment>
    )
}

export function MainSlot({children}){
    return(
        <Fragment>{children}</Fragment>
    )
}

export function LSideMenu() {
  return (
    <Box sx={{ flexGrow: 1, height: 'inherit' }}>
      <Grid container spacing={0} sx={{height: 'inherit'}}>
        <Grid item xs={2} sx={{height: 'inherit', backgroundColor:'#3A3A3A', overflow: 'auto'}}>
          <LeftSlot></LeftSlot>
        </Grid>
        <Grid item xs sx={{height: 'inherit', display: 'flex', flexDirection: 'column', padding:5}}>
          <MainSlot></MainSlot>
        </Grid>
      </Grid>
    </Box>
  );
}
