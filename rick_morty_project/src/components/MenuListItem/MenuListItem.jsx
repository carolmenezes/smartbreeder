import React from "react";
import "./.css";
import { useSelector, useDispatch } from "react-redux";
// import { updateSelected } from "../../store/charactersSlice";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function MenuListItem({ id, avatar, content }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const dispatch = useDispatch();

  // const selected = useSelector((state) => state.characters.selected.id) == id;

  // const onItemClickHandler = () => {
  //   dispatch(updateSelected(id));
  // };

  return (
    // <ListItem
    //   alignItems="flex-start"
    //   onClick={onItemClickHandler}
    //   sx={{ backgroundColor: selected ? theme.palette.primary.main : "" }}
    // >
    //   <ListItemButton sx={{ height: 180 }}>
    //     <ListItemAvatar>
    //       <Avatar alt="Character Avatar" src={avatar} />
    //     </ListItemAvatar>
    //     {!matches ? (
    //       <></>
    //     ) : (
    //       <ListItemText
    //         primary={content}
    //         primaryTypographyProps={{
    //           fontWeight: selected ? "700" : "300",
    //           fontSize: 24,
    //         }}
    //       />
    //     )}
    //   </ListItemButton>
    // </ListItem>
    <></>
  );
}

export default MenuListItem;
