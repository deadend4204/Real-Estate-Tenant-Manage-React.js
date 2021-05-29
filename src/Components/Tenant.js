import React from "react";

import { TableCell, TableRow } from "@material-ui/core";
import TenantMenu from "./TenantMenu";

const Tenant = ({ row, tenantModal }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.tenantName}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        <TenantMenu tenantModal={tenantModal} tenantID={row.tenantID} />
      </TableCell>
    </TableRow>
  );
};

export default Tenant;
