import React, { Fragment, useEffect, useState, useRef } from "react";

/**APOLLO */
import { characterSchema, charactersSchema, useQuery } from "../apollo/queries";

/**REDUX */
import { useSelector, useDispatch } from "react-redux";
import {
  updateActive,
  updatePage,
  setPagesCount,
  setFilter,
} from "../store/charactersSlice";

/**MUI */
import { useTheme, useMediaQuery, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Pagination from "@mui/material/Pagination";

/**CUSTOM COMPONENTS */
import BasicTable from "../components/BasicTable";
import BasicBarChart from "../components/BasicBarChart";
import AvatarListItem from "../components/AvatarListItem";
import ResponsiveDrawer from "../components/ResponsiveDrawer";

/**PAGE ELEMENTS */
function InfoSlot({ data }) {
  const { status, species, gender, origin } = data;
  const formatedData = { status, species, gender, origin: origin.name };

  return (
    <Fragment>
      <Grid item container xs={9} md={6}>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography
              gutterBottom
              variant="h3"
              fontWeight={700}
              component="div"
            >
              {data.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Typography
              gutterBottom
              variant="h6"
              color={"primary"}
              component="div"
            >
              Dados do personagem
            </Typography>
          </Grid>
          <Grid item xs>
            <BasicTable
              columns={Object.keys(formatedData)}
              rows={Array.of(formatedData)}
              align="center"
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

function AvatarSlot({ image }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  if (matches) {
    return <Fragment></Fragment>;
  }
  return (
    <Fragment>
      <Grid
        item
        xs={2}
        md={4}
        lg={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "",
        }}
      >
        <Avatar
          src={image}
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: 300,
            aspectRatio: 1,
          }}
        ></Avatar>
      </Grid>
    </Fragment>
  );
}

function ChartSlot({ episode }) {
  const months = Array.of(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  let EpisodesPerMonth = Object.fromEntries(
    months.map((month) => {
      return [month, 0];
    })
  );

  episode?.forEach((episode) => {
    let month = episode.air_date.split(" ")[0];
    EpisodesPerMonth[month] = (EpisodesPerMonth[month] || 0) + 1;
  });

  let formatedData = Object.entries(EpisodesPerMonth).map((item) => {
    return { month: item[0], total: item[1] };
  });

  return (
    <Fragment>
      <Typography gutterBottom variant="h6" color={"primary"} component="div">
        Aparições por mês
      </Typography>
      <Box
        sx={{
          margin: 0,
          flexGrow: 1,
          bgcolor: "background.paper",
          borderRadius: 4,
        }}
      >
        <BasicBarChart
          data={formatedData}
          labelField={"month"}
          valueField={"total"}
          axisLabels={["Meses do Ano", "Número de aparições"]}
        ></BasicBarChart>
      </Box>
    </Fragment>
  );
}

function CharacterSet() {
  const activeCharacter = useSelector((state) => state.characters.active);
  let characterData = {};

  const { loading, error, data } = useQuery(characterSchema.GET, {
    variables: { id: activeCharacter },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  characterData = data.character;
  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <InfoSlot data={characterData} />
        <AvatarSlot image={characterData.image} />
      </Grid>
      <ChartSlot episode={characterData.episode} />
    </Fragment>
  );
}

function MenuItens() {
  const dispatch = useDispatch();
  const activeCharacter = useSelector((state) => state.characters.active);
  const activePage = useSelector((state) => state.characters.page);

  const onItemClickHandler = (_id) => {
    dispatch(updateActive(_id));
  };

  let characters = [];
  let info = {};
  const { loading, error, data } = useQuery(charactersSchema.GET, {
    variables: { page: activePage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  characters = data.characters.results;
  info = data.characters.info;

  dispatch(setPagesCount(info.pages));

  return (
    <List sx={{ position: "relative" }}>
      {characters.map(({ id, name, image }) => {
        return (
          <AvatarListItem
            key={id}
            id={id}
            text={name}
            avatar={image}
            active={id == activeCharacter}
            action={onItemClickHandler}
          />
        );
      })}
    </List>
  );
}

function MenuPagination() {
  const pagesCount = useSelector((state) => state.characters.pagesCount);
  const dispatch = useDispatch();

  const handleChange = (event, page) => {
    dispatch(updatePage(page));
  };

  return (
    <Fragment>
      <Box
        sx={{
          padding: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          count={pagesCount}
          variant="outlined"
          color="primary"
          siblingCount={0}
          boundaryCount={1}
          size="large"
          onChange={handleChange}
        />
      </Box>
    </Fragment>
  );
}

/**PAGE SET */
export default function CharacterPanel() {
  const mainContainer = useRef(null);
  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(
    useMediaQuery(theme.breakpoints.down("md"))
  );

  useEffect(() => {
    const handleResize = (entries) => {
      if (entries.length > 0) {
        const entry = entries[0];
        setIsMobile(entry.contentRect.width < theme.breakpoints.values.md);
      }
    };
    const resizeObserver = new ResizeObserver(handleResize);

    if (mainContainer.current) {
      resizeObserver.observe(mainContainer.current);
    }
    return () => {
      if (mainContainer.current) {
        resizeObserver.unobserve(mainContainer.current);
      }
    };
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          height: "inherit",
          display: "flex",
          flexDirection: "row",
        }}
        ref={mainContainer}
      >
        <ResponsiveDrawer mobile={isMobile}>
          <Box sx={{ flexGrow: 1, overflowY: "auto", overflowX: "hidden" }}>
            <MenuItens></MenuItens>
          </Box>
          <MenuPagination />
        </ResponsiveDrawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            height: "inherit",
            display: "flex",
            flexDirection: "column",
            padding: 5,
            overflow: "auto",
          }}
        >
          <CharacterSet />
        </Box>
      </Box>
    </Fragment>
  );
}
