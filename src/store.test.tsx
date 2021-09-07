import store from "./store";
import axios from "axios";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  jest.clearAllMocks();
  store.reset();
});

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
  test("using valid data for setUserInfo (pt 1)", async () => {
    // pretends to be axios
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

    expect(store.getUserInfo).toEqual(dummyData.teamMembers[0]);
  });

  test("using valid data for setUserInfo (pt 2)", async () => {
    mockAxios.get
      .mockResolvedValueOnce({ data: dummyData.cccs })
      .mockResolvedValueOnce({ data: dummyData.teamMembers[0] })
      .mockResolvedValueOnce({ data: dummyData.teamMembers[1] });

    let cccsId = "xyz";
    let email = dummyData.teamMembers[1].email;
    await store.setUserInfo(email, cccsId);

    expect(mockAxios.get).toHaveBeenCalledTimes(3);
    expect(store.infoFound).toBe(true);
    expect(store.info).toEqual(dummyData.teamMembers[1]);

    expect(store.getUserInfo).toEqual(dummyData.teamMembers[1]);
  });
});

describe("mobx store with invalid data", () => {
  test("getUserInfo without calling setUserInfo first", () => {
    expect(store.getUserInfo).toBe(undefined);
  });

  test("setUserInfo without email match", async () => {
    mockAxios.get
      .mockResolvedValueOnce({ data: dummyData.cccs })
      .mockResolvedValueOnce({ data: dummyData.teamMembers[0] })
      .mockResolvedValueOnce({ data: dummyData.teamMembers[1] });

    expect(store.info).toEqual({ email: "" });

    let cccsId = "xyz";
    let email = "notfound@email.com";
    await store.setUserInfo(email, cccsId);

    expect(mockAxios.get).toHaveBeenCalledTimes(3);
    expect(store.info).toEqual({ email: "" });
    expect(store.getUserInfo).toBe(undefined);
  });
});
