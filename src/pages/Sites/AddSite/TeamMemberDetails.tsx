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
import { deepPurple } from "@material-ui/core/colors";

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
    root: {
      margin: "0 10vw",
    },
    section: {
      padding: "30px 0",
    },
    formControl: {
      margin: theme.spacing(1),
      width: "50vw",
    },
    selectRoot: {
      paddingRight: "32px",
      border: "1px solid black",
      borderRadius: "4px",
    },
    selectInput: {
      padding: "18.5px 14px",
    },
    chip: {
      margin: 2,
      border: "1px dashed #ABC3D1",
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
      border: "1px solid #2C698D",
      borderRadius: "6px",
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
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">
              Add team member
            </InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={teammember}
              defaultValue=""
              label="Add team member"
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
