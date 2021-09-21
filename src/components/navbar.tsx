import React from "react";
import { Toolbar, makeStyles, Theme } from "../styles/material-ui";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/test_logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login-button";
import UserDropdown from "./user-dropdown";

const useStyles = makeStyles((theme: Theme) => ({
  styleStripper: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid #D5E1E8",
    backgroundColor: "white",
    paddingLeft: "7.4vw",
  },
  link: {
    textDecoration: "none",
    color: "black",
    margin: theme.spacing(2),
    padding: "8px 5px",
    borderRadius: "2px",
    "&:hover": {
      backgroundColor: theme.palette.background.default,
    },
  },
  active: {
    color: theme.palette.primary.main,
  },
  left: {
    flexGrow: 1,
  },
  right: {
    marginRight: "7.4vw",
  },
  spacing: {
    paddingRight: theme.spacing(10),
  },
  logo: {
    maxWidth: 40,
  },
  hidden: {
    display: "none",
  },
}));

function Navbar() {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();

  return (
    <nav className={classes.appBar}>
      <Toolbar className={classes.styleStripper}>
        <Link to="/">
          <img src={logo} alt="iTrial" className={classes.logo} />
        </Link>
        <span className={classes.left}></span>
        <div className={isAuthenticated ? classes.spacing : classes.hidden}>
          <NavLink
            to="/trials"
            className={classes.link}
            activeClassName={classes.active}
          >
            Trials
          </NavLink>
          <NavLink
            to="/sites"
            className={classes.link}
            activeClassName={classes.active}
          >
            Sites
          </NavLink>
          <NavLink
            to="/teams"
            className={classes.link}
            activeClassName={classes.active}
          >
            Team
          </NavLink>
          <NavLink
            to="/patients"
            className={classes.link}
            activeClassName={classes.active}
          >
            Patients
          </NavLink>
        </div>
        <div className={classes.right}>
          {isAuthenticated ? <UserDropdown /> : <LoginButton />}
        </div>
      </Toolbar>
    </nav>
  );
}
export default Navbar;
