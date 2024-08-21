import React from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

import { char, useQuery } from "../../apollo/queries";

import MenuListItem from "../MenuListItem";

function MenuList(props) {
  const { loading, error, data } = useQuery(char.GET_CHARACTER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Box sx={{ width: "100%", height: "inherit" }}>
      <List sx={{ position: "relative"}}>
        {data.characters.results.map(({ id, name, image }) => {
          return (
            <MenuListItem key={id} content={name} avatar={image} id={id} />
          );
        })}
      </List>
    </Box>
  );
}

export default MenuList;
