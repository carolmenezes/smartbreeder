import React from "react";
import Box from "@mui/material/Box";

export default function LoadingScreen() {
  return (
    <Box sx={{backgroundColor: 'red', position:'absolute', width: '100%', height: '100%', zIndex:999}}>
    </Box>
  );
}
