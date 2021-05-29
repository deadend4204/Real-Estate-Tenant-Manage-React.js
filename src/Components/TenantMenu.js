import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RealEstateContext from "../Context/realEstate/realEstateContext";

const TenantMenu = ({ tenantID, tenantModal }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const realEstateContext = useContext(RealEstateContext);
  const { deleteTenant, setChosenTenant, setEditTenant } = realEstateContext;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    deleteTenant(id);
    handleClose();
  };

  const handleEdit = (id) => {
    setChosenTenant(id);
    handleClose();
    setEditTenant(true);
    tenantModal();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleEdit(tenantID)}>Edit</MenuItem>
        <MenuItem onClick={() => handleDelete(tenantID)}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default TenantMenu;
