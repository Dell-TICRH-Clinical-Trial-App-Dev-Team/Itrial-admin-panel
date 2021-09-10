import { Site } from "../../api/models";

const dummySiteData: Site[] = [
  {
    name: "Site1",
    address: "Austin",
    trials: [],
    teamMembers: [
      {
        name: "Steve",
        address: "123 People Dr",
        email: "steve@gmail.com",
        phoneNumber: 1234567890,
        trials: [],
        sites: [],
        id: 1,
      },
      {
        name: "Larry",
        address: "456 People Dr",
        email: "larry@gmail.com",
        phoneNumber: 6691649240,
        trials: [],
        sites: [],
        id: 2,
      },
    ],
    cccs: [],
    id: 1,
  },
  {
    name: "Site2",
    address: "Dallas",
    trials: [
      {
        name: "trial 1",
        status: "pending",
        id: 1,
      },
    ],
    teamMembers: [
      {
        name: "Steve",
        address: "123 People Dr",
        email: "steve@gmail.com",
        phoneNumber: 1234567890,
        trials: [],
        sites: [],
        id: 1,
      },
    ],
    cccs: [],
    id: 2,
  },
];

export default dummySiteData;
