import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { char, useQuery } from "../apollo/queries";

/**MUI */
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Typography, useTheme, Box } from "@mui/material";

/**CUSTOM COMPONENTS */
import BasicTable from "../components/BasicTable";
import BasicBarChart from "../components/BasicBarChart";

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

export default function CharPanel() {
  const theme = useTheme();
  const selectedId = useSelector((state) => state.characters.selected.id);
  let charData = {};

  const { loading, error, data } = useQuery(char.GET_ONE, {
    variables: { id: selectedId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  charData = data.character;

  const { status, species, gender, origin } = charData;
  const tableData = { status, species, gender, origin: origin.name };

  let EpisodesPerMonth = Object.fromEntries(
    months.map((month) => {
      return [month, 0];
    })
  );
  charData.episode?.forEach((episode) => {
    let month = episode.air_date.split(" ")[0];
    EpisodesPerMonth[month] = (EpisodesPerMonth[month] || 0) + 1;
  });

  let chartData = Object.entries(EpisodesPerMonth).map((item) => {
    return { month: item[0], total: item[1] };
  });

  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <Grid item container xs={9} md={6}>
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h3"
                fontWeight={700}
                component="div"
              >
                {charData.name}
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
                columns={Object.keys(tableData)}
                rows={Array.of(tableData)}
                align="center"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: ''
          }}
        >
          <Avatar
            src={charData.image}
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: 300,
              aspectRatio: 1,
            }}
          ></Avatar>
        </Grid>
      </Grid>
      <Typography gutterBottom variant="h6" color={"primary"} component="div">
        Aparições por mês
      </Typography>
      <Box sx={{ margin:0, flexGrow: 1, bgcolor:'background.paper', borderRadius: 4}}>
        <BasicBarChart
          data={chartData}
          labelField={"month"}
          valueField={"total"}
          axisLabels={["Meses do Ano", "Número de aparições"]}
        ></BasicBarChart>
      </Box>
    </Fragment>
  );
}
