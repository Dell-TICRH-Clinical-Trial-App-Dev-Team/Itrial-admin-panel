import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Theme,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "../../../styles/material-ui";
import { useTheme, createStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const teammemberList = [
  "alexander hamilton",
  "george washington",
  "thomas jefferson",
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: "50vw",
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    root: {
      margin: "0 10vw",
    },
    section: {
      padding: "30px 0",
    },
    textField: {
      paddingTop: "20px",
      width: "100%",
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function TeamMemberDetails() {
  const classes = useStyles();
  const [teammember, setTeammember] = useState<string[]>([]);

  const handleFormChange = (e) => {
    setTeammember(e.target.value);
  };

  const handleChipDelete = (chipToDelete: string) => {
    // console.log(chipToDelete);
    setTeammember(teammember.filter((member) => member !== chipToDelete));
  };

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h5">Team members</Typography>
        <div className={classes.textField}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">
              Add team member
            </InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={teammember}
              onChange={handleFormChange}
              input={<Input />}
              renderValue={(selected) => (selected as string[]).join(", ")}
              MenuProps={MenuProps}
            >
              {teammemberList.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                  <Checkbox
                    icon={<AddCircleIcon color="primary" />}
                    checkedIcon={<CheckCircleOutlineIcon color="primary" />}
                    checked={teammember.indexOf(name) > -1}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          {teammember.map((name: string) => (
            <Chip
              key={name}
              label={name}
              variant="outlined"
              color="primary"
              onClick={() => handleChipDelete(name)}
              onDelete={() => handleChipDelete(name)}
              className={classes.chip}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
