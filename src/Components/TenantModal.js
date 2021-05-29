import React, { useContext, useEffect, useState } from "react";
import RealEstateContext from "../Context/realEstate/realEstateContext";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Button,
  TextField,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "25px",
    boxShadow: theme.shadows[5],
    width: "400px",
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TenantModal = ({ open, handleClose, edit }) => {
  const classes = useStyles();
  const realEstateContext = useContext(RealEstateContext);
  const [name, setName] = useState("");
  const [propertyID, setPropertyID] = useState("");

  const { addTenant, editTenant, chosenTenant, properties } = realEstateContext;

  const onSubmit = (e) => {
    e.preventDefault();
    let tenant;
    if (editTenant) {
      tenant = {
        tenantID: chosenTenant[0].tenantID,
        tenantName: name,
        propertyID: chosenTenant[0].propertyID,
      };
    } else {
      tenant = { tenantName: name, propertyID };
    }
    addTenant(editTenant, tenant);
    handleClose();
  };

  useEffect(() => {
    if (editTenant) {
      setName(chosenTenant[0].tenantName);
      setPropertyID(chosenTenant[0].propertyID);
    } else {
      setName("");
      setPropertyID("");
    }
  }, [editTenant, chosenTenant]);

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <div>
        <div className={classes.paper}>
          <Typography variant="h6">
            {editTenant ? "Edit" : "Add"} Tenant
          </Typography>

          <form onSubmit={onSubmit}>
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Tenant Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Property
              </InputLabel>
              <Select
                native
                value={propertyID}
                onChange={(e) => setPropertyID(e.target.value)}
                label="Property"
                inputProps={{
                  name: "propertyID",
                }}
                required
                disabled={editTenant}
              >
                <option aria-label="None" value="" />
                {properties.map((property) => (
                  <option key={property.propertyID} value={property.propertyID}>
                    {property.propertyName}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Grid
              container
              justify={"flex-end"}
              style={{ marginTop: ".5em" }}
              spacing={3}
            >
              <Grid item>
                <Button
                  type="button"
                  onClick={handleClose}
                  variant="contained"
                  color="secondary"
                >
                  Close
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default TenantModal;
