import React from "react";
import axios from "axios";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

var cccId;
var cccName = "New CCCS";

beforeAll(async () => {
  const mockCCC = {
    name: cccName,
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
    },
  };

  await axios({
    method: "post",
    url: "http://localhost:8000/api/cccs",
    headers: axiosConfig,
    data: mockCCC,
  }).then((res) => {
    cccId = res.data._id;
    cccName = res.data.name;
    console.log("Name: ", res.data.name, "\nId: ", cccId);
  });
});

//"http://localhost:8000/api/cccs"
test("a test", async () => {
  expect(cccName).toBe("New CCCS");
});
// describe("settingUserInfo works", () => {});
//
// describe("getUserInfo getting correct info", () => {});
