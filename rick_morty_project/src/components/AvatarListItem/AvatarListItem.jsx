import React from "react";

/** MUI */
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AvatarListItem({ id, avatar, text, active, action }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = () => {
    action(id);
  };

  return (
    <ListItem
      
      sx={{
        backgroundColor: active ? theme.palette.primary.main : "",
      }}
      onClick={handleClick}
    >
      <ListItemButton
        sx={{
          height: 180,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Character Avatar" src={avatar} />
        </ListItemAvatar>
        {!matches ? (
          <></>
        ) : (
          <ListItemText
            primary={text}
            primaryTypographyProps={{
              fontWeight: active ? "700" : "300",
              fontSize: 24,
              textOverflow: "ellipsis",
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}
