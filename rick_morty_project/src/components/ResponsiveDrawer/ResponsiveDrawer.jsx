import React, { Fragment, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


export default function ResponsiveDrawer({ width = 360, mobile = false, children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if(!mobile) return setOpen(true);
  }, [mobile])

  return (
    <Fragment>
      {!mobile ? (
        <></>
      ) : (
        <Box
          sx={{
            zIndex: 99,
            position: "absolute",
            top: "50%",
            left: open ? width : 0,
          }}
        >
          <IconButton color="primary" onClick={toggleDrawer}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
      )}
      <Drawer
        sx={{
          width: width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: width,
            boxSizing: "border-box",
            overflowY: "clip",
          },
          position: mobile ? "absolute" : "relative",
        }}
        ModalProps={{
          keepMounted: true,
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {children}
      </Drawer>
    </Fragment>
  );
}
