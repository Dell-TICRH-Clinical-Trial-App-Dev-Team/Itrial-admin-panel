import React from "react";
import { trialCardDTO } from "../../TrialTabs";
import InfoCard from "./InfoCard";

interface props {
  data: trialCardDTO[];
  statusShow: string;
}

// Maps through each data entry and returns data in <InfoCard />
const InfoCards: React.FC<props> = ({ data, statusShow }) => {
  // filter according to status type
  if (statusShow !== "all") {
    data = data.filter((trial: trialCardDTO) => trial.status === statusShow);
  }

  return (
    <div>
      {
        // FIXME: Adapt to actual data format
        data.map((trial: trialCardDTO) => (
          <InfoCard
            name={trial.name}
            startDate={trial.startDate}
            completionDate={trial.completionDate}
            patientsCompleted={trial.patientsCompleted}
            status={trial.status}
            key={trial.id}
          />
        ))
      }
    </div>
  );
};

export default InfoCards;
