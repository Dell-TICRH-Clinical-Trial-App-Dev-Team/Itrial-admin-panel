import React from "react";
import {
  makeStyles,
  Typography,
  Theme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  createStyles,
  Checkbox,
  CheckCircleOutlineIcon,
  ListItemText,
  Input,
  Chip,
  AddCircleIcon,
} from "../../../styles/material-ui";

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

export default function TeamMemberDetails({
  teammember,
  handleSiteChange,
  teammemberList,
}) {
  const classes = useStyles();

  const handleChipDelete = (chipToDelete: string) => {
    handleSiteChange(
      "teammember",
      teammember.filter((member) => member !== chipToDelete)
    );
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
              labelId="teammember-drop-down"
              id="teammember-drop-down"
              data-testid="teammemberSelect"
              multiple
              value={teammember}
              defaultValue=""
              label="Add team member"
              inputProps={{ "data-testid": "teammemberOption" }}
              onChange={(e) => handleSiteChange("teammember", e.target.value)}
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
