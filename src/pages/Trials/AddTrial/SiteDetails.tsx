import React, { useState } from "react";
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
  TextField,
} from "../../../styles/material-ui";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "0 10vw",
  },
  section: {
    padding: "30px 0 30px 0",
  },
  textField: {
    paddingTop: "20px",
    width: "100%",
  },
  select: {
    width: "22vw",
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
}));

export default function SiteDetails({ sites, allSites, handleTrialChange }) {
  const classes = useStyles();
  const [teamMembersForSites, setTeamMembersForSites] = useState([]);

  const handleChipDelete = (chipToDelete: string) => {};

  const getAllTeamMemberNames = (siteName) => {
    return allSites
      .filter((site) => site.name == siteName)
      .teamMembers.map((teamMember) => teamMember.name);
  };

  const updateTeamMembersForSite = (index, teamMemberNames) => {
    let updatedSites = sites;
    updatedSites[index] = {
      ...updatedSites[index],
      teamMembers: updatedSites[index].filter((teamMember) =>
        teamMemberNames.includes(teamMember.name)
      ),
    };
  };

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

  return (
    <div>
      {sites.map((site, index) => (
        <>
          <div className={classes.root}>
            <div className={classes.section}>
              <Typography variant="h5">{"Site " + (index + 1)}</Typography>
              <div className={classes.textField}>
                <TextField
                  variant="outlined"
                  label="Name"
                  color="primary"
                  fullWidth
                  value={site.name}
                  onChange={(e) => handleTrialChange}
                />
              </div>
            </div>
          </div>

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
                value={getAllTeamMemberNames(site.name)}
                defaultValue=""
                label="Add team member"
                inputProps={{ "data-testid": "teammemberOption" }}
                onChange={(e) =>
                  updateTeamMembersForSite(index, e.target.value)
                }
                input={<Input />}
                renderValue={(selected) => (selected as string[]).join(", ")}
                MenuProps={MenuProps}
              >
                {getAllTeamMemberNames(site.name).map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                    <Checkbox
                      icon={<AddCircleIcon color="primary" />}
                      checkedIcon={<CheckCircleOutlineIcon color="primary" />}
                      checked={site.teamMembers.indexOf(name) > -1}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            {site.teamMembers.map((name: string) => (
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
        </>
      ))}
    </div>
  );
}
