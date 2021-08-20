import React from 'react'
import InfoCard from "./InfoCard";

//typescript
interface item {
    name: string,
    startDate: string,
    completionDate: string,
    patientsCompleted: string,
    status: string,
    id: number
}

interface DataProps {
    data: item[],
    statusShow: string
}

//Maps through each data entry and returns data in <InfoCard />
const InfoCards: React.FC<DataProps> = ({data, statusShow}) => {
    //filter according to status type
    if(statusShow !== "all") {
        data = data.filter((item: item) => item.status === statusShow)
    }

    return(
        <div>
            {
                //FIXME: Adapt to actual data format
                data.map((item: item) => (
                    <InfoCard
                        name={item.name}
                        startDate={item.startDate}
                        completionDate={item.completionDate}
                        patientsCompleted={item.patientsCompleted}
                        status={item.status}
                        key={item.id}
                    />
                ))
            }
        </div>
    )
};

export default InfoCards;
