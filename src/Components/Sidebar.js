import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddBox from "@material-ui/icons/AddBox";
import RealEstateContext from "../Context/realEstate/realEstateContext";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: "240px",
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },

  drawerPaper: {
    width: "240px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  drawerContainer: {
    overflow: "auto",
  },
  menuText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

export default function Sidebar({ tenantModal }) {
  const realEstateContext = useContext(RealEstateContext);
  const { setEditTenant } = realEstateContext;
  const classes = useStyles();
  const showTenantModal = () => {
    tenantModal();
    setEditTenant(false);
  };
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Tenant Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={showTenantModal}>
              <ListItemIcon>
                <AddBox />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.menuText}>Add Tenant</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Fragment>
  );
}
