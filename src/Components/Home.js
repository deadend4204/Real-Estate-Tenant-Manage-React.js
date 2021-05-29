import React, { useContext } from "react";
import RealEstateContext from "../Context/realEstate/realEstateContext";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Toolbar, Typography } from "@material-ui/core";

import Sidebar from "./Sidebar";
import Property from "./Property";
import TenantModal from "./TenantModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  home: {
    textAlign: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const realEstateContext = useContext(RealEstateContext);

  const { properties } = realEstateContext;

  const [openTenant, setOpenTenant] = React.useState(false);

  //   Open Tenant Modal
  const handleOpenTenant = () => {
    setOpenTenant(true);
  };

  const handleCloseTenant = () => {
    setOpenTenant(false);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Sidebar tenantModal={handleOpenTenant} />
      <main className={classes.content}>
        <Toolbar />
        <Typography className={classes.home} variant="h4">
          PROPERTIES
        </Typography>
        <Grid container direction="row" spacing={4} justify="center">
          {properties.map((property) => (
            <Grid item key={property.propertyID}>
              <Property
                tenantModal={handleOpenTenant}
                propertyID={property.propertyID}
                propertyName={property.propertyName}
                propertyDescription={property.propertyDescription}
                propertyAddress={property.propertyAddress}
                expanded={expanded}
                handleChange={handleChange}
              />
            </Grid>
          ))}
        </Grid>
        <TenantModal open={openTenant} handleClose={handleCloseTenant} />
      </main>
    </div>
  );
};

export default Home;
