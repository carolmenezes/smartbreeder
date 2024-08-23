import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function BasicTable({ columns, rows, align }) {
  return (
    <Table sx={{ minWidth: 100 }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 2, borderRadius: '8px' } }}>
          {columns.map((column, index) => {
            return (
              <TableCell
                key={index}
                align={align}
                sx={{ fontWeight: 600, textTransform: "capitalize", }}
              >
                {column}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, indexRow) => (
          <TableRow
            key={indexRow}
            sx={{ "&:last-child td, &:last-child th": { border: 2, borderRadius: '8px' } }}
          >
            {columns.map((column, indexCol) => {
              return (
                <TableCell
                  key={String(indexRow).concat(indexCol)}
                  align={align}
                >
                  {row[column]}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
