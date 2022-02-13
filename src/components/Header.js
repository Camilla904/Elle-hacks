import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core";
import logo from "../images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
const useStyle = makeStyles({
  header: {
    height: "5em",
    width: "100%",
    background: "#F5F3E8",
    position: "sticky",
    paddingLeft: "2em",
    paddingRight: "2em",
  },
  logo: {
    position: "absolute",
    left: "1em",
    height: "-webkit-fill-available",
  },
  user: {
    textAlign: "right",
    alignSelf: "flex-end",
  },
  icon: {
    color: "#86CB96",
  },
});

const CustomizedInputBase = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        alignSelf: "end",
        width: 400,
        textAlign: "right",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for products"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
function Header(props) {
  const classes = useStyle();

  return (
    <React.Fragment>
      <Grid container spacing={2} className={classes.header}>
        <Grid item xs={2}>
          <img src={logo} className={classes.logo}></img>
        </Grid>

        <Grid item xs={6}>
          <CustomizedInputBase />
        </Grid>
        <Grid item xs={4}>
          <div>
            <span>{props.name}</span>
            <AccountCircleIcon className={classes.icon} />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Header;
