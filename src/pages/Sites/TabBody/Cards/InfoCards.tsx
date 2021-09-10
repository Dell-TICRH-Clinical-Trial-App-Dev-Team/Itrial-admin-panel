import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import InfoCard from "./InfoCard";
import { Site } from "../../../../api/models";

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    margin: "0 7.4vw",
  },
}));

interface props {
  sites: Site[];
  statusShow: number;
}

// Maps through each data entry and returns data in <InfoCard />
const InfoCards: React.FC<props> = ({ sites, statusShow }) => {
  // filter according to status type
  if (statusShow !== 0) {
    sites = sites.filter((site: Site) => {
      if (statusShow == 1) return site.trials.length > 0;
      else if (statusShow == 2) return site.trials.length == 0;
    });
  }

  const classes = useStyles();
  return (
    <div className={classes.body}>
      {sites.map((site: Site) => (
        <InfoCard
          name={site.name}
          siteId={`SI - ${site.id}`}
          address={site.address}
          members={site.teamMembers.length}
          activeTrials={site.trials.length}
          key={site.id}
        />
      ))}
    </div>
  );
};

export default InfoCards;
