import React, { Fragment, useContext, useEffect } from "react";
import RealEstateContext from "../Context/realEstate/realEstateContext";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import TenantAccordion from "./TenantAccordion";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Property = ({
  propertyID,
  expanded,
  handleChange,
  tenantModal,
  propertyName,
  propertyDescription,
  propertyAddress,
}) => {
  const classes = useStyles();
  const realEstateContext = useContext(RealEstateContext);
  const { getTenants, tenants } = realEstateContext;

  const showTenants = () => {
    if (expanded !== propertyID) getTenants(propertyID);
  };
  useEffect(() => {
    if (expanded === propertyID) {
      getTenants(propertyID);
    }
    // eslint-disable-next-line
  }, [tenants]);
  return (
    <Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://cdn.corporatefinanceinstitute.com/assets/real-estate-1024x614.jpeg"
            title="Real Estate Property"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {propertyName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {propertyAddress}
            </Typography>
          </CardContent>
        </CardActionArea>

        <div onClick={showTenants}>
          <TenantAccordion
            propertyID={propertyID}
            expanded={expanded}
            handleChange={handleChange}
            tenantModal={tenantModal}
          />
        </div>
      </Card>
    </Fragment>
  );
};

export default Property;
