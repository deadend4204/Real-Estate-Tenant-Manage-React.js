import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@material-ui/core";

import Tenant from "./Tenant";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TenantTable = ({ rows, tenantModal }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tenant</StyledTableCell>
              <StyledTableCell align="right">Controls</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Tenant tenantModal={tenantModal} key={row.tenantID} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TenantTable;
