import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable(props) {
    console.log(props.rows)
  return (
    // <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map((column, index) => {
              return (
                <TableCell key={index} align={props.align} sx={{fontWeight: 600, textTransform: "capitalize"}}>
                  {column}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, indexRow) => (
            <TableRow
              key={indexRow}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {props.columns.map((column, indexCol) => {
                return (
                  <TableCell key={String(indexRow).concat(indexCol)} align={props.align}>
                    {row[column]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    // </TableContainer>
  );
}
