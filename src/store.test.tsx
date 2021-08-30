import React from "react";
import axios from "axios";
import store from "./store";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

var cccsId = "";
var teamMembersId: string[] = [];

let dummyData = {
  cccs: {
    name: "New CCCS",
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

beforeAll(async () => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
    },
  };

  //create cccs
  await axios({
    method: "post",
    url: "http://localhost:8000/api/cccs",
    headers: axiosConfig,
    data: dummyData.cccs,
  }).then((res) => {
    cccsId = res.data._id;
  });

  //create team members
  await axios({
    method: "post",
    url: "http://localhost:8000/api/team-members",
    headers: axiosConfig,
    data: dummyData.teamMembers[0],
  }).then((res) => {
    teamMembersId[0] = res.data._id;
  });

  await axios({
    method: "post",
    url: "http://localhost:8000/api/team-members",
    headers: axiosConfig,
    data: dummyData.teamMembers[1],
  }).then((res) => {
    teamMembersId[1] = res.data._id;
  });

  let putData = {
    operation: "add teamMembers",
    payload: teamMembersId,
  };
  await axios({
    method: "put",
    url: `http://localhost:8000/api/cccs/${cccsId}`,
    headers: axiosConfig,
    data: putData,
  });
});

describe("settingUserInfo and getUserInfo works with valid data", () => {
  test("setUserInfo should set valid data correctly", () => {
    expect(true).toBe(true);
  });

  test("getUserInfo should return correct data if valid", () => {});

  //set data
  //test each different team member --> get correct info
  //test unknown team member --> infoFound = false & getUserInfo --> undefined
  //
  //test for invalid cccs
});

describe("settingUserInfo and getUserInfo catches invalid data", () => {
  test("setUserInfo should catch invalid data", () => {
    expect(true).toBe(true);
  });
  test("getUserInfo should return undefined if invalid data attempted", () => {
    expect(true).toBe(true);
  });
});
