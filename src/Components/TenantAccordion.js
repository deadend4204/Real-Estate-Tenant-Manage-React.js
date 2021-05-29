import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  unstable_createMuiStrictModeTheme,
  ThemeProvider,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";

import RealEstateContext from "../Context/realEstate/realEstateContext";
import TenantTable from "./TenantTable";

const theme = unstable_createMuiStrictModeTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  details: {
    display: "block",
  },
}));

const TenantAccordion = ({
  expanded,
  handleChange,
  propertyID,
  tenantModal,
}) => {
  const classes = useStyles();
  const realEstateContext = useContext(RealEstateContext);
  const { currentTenants } = realEstateContext;

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Accordion
          expanded={expanded === propertyID}
          onChange={handleChange(propertyID)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Tenants</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            {currentTenants.length === 0 ? (
              "No Tenants"
            ) : (
              <TenantTable tenantModal={tenantModal} rows={currentTenants} />
            )}
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
};

export default TenantAccordion;
