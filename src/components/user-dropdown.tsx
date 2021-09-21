import React from "react";
import {
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import "../styles/App.css";
import { useAuth0 } from "@auth0/auth0-react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const UserDropdown = () => {
  const { user, logout } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          textTransform: 'none',
        }}
      >
        { user?.name ? user.name : ""}
      </Button>
      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={() =>
          logout({
            returnTo: window.location.origin,
          })}>
          Log Out
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserDropdown;
