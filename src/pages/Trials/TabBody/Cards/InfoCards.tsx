import React from 'react'
import InfoCard from "./InfoCard";

/*
*
* Change props depending of type of data input
*
* */

interface item {
    name: string,
    startDate: string,
    completionDate: string,
    endpoints: number,
    status: string,
    id: number
}

interface DataProps {
    data: item[],
    statusShow: string
}

const InfoCards: React.FC<DataProps> = ({data, statusShow}) => {
    //filter status type
    if(statusShow !== "all") {
        data = data.filter((item: item) => item.status === statusShow)
    }

    return(
        <div>
            {
                data.map((item: item) => (
                    <InfoCard
                        name={item.name}
                        startDate={item.startDate}
                        completionDate={item.completionDate}
                        endpoints={item.endpoints}
                        status={item.status}
                        key={item.id}
                    />
                ))
            }
        </div>
    )
};

export default InfoCards;
