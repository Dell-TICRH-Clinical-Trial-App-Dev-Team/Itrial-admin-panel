import store from "./store";
import axios from "axios";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

let dummyData = {
  cccs: {
    teamMembers: ["randomId1", "randomId2"],
  },
  teamMembers: [
    {
      name: "Carl Creme",
      address: "Central Park, New York",
      email: "tree@hipster.com",
      phoneNumber: 4444444444,
    },
    {
      name: "Bob",
      address: "Washington DC",
      email: "superDad@superStrength.com",
      phoneNumber: 1234567890,
    },
  ],
};

describe("testing setUserInfo", () => {
  test("using valid data for setUserInfo", async () => {
    mockAxios.get
      .mockResolvedValueOnce({ data: dummyData.cccs })
      .mockResolvedValueOnce({ data: dummyData.teamMembers[0] })
      .mockResolvedValueOnce({ data: dummyData.teamMembers[1] });

    let cccsId = "abc";
    let email = dummyData.teamMembers[0].email;
    await store.setUserInfo(email, cccsId);

    expect(mockAxios.get).toHaveBeenCalledTimes(3);
    expect(store.infoFound).toBe(true);
    expect(store.info).toEqual(dummyData.teamMembers[0]);
  });
});
