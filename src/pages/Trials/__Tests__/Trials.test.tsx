import React from "react";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "../TabBody/SearchBar";
import InfoCards from "../TabBody/Cards/InfoCards";
import TrialTabs from "../TrialTabs";

// Clicking through tabs changes status info cards status shown
describe("clicking tabs for trial states", () => {
  test("clicking the 'all' tab should display active trials", () => {
    const { getByTestId, getByRole } = render(<TrialTabs />);
    const allTab = getByTestId("all-tab");

    // verify that 'all' tab is the default tab on page visit
    let selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(allTab);

    fireEvent.click(allTab);

    selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(allTab);
  });

  test("clicking the 'active' tab should display active trials", () => {
    const { getByTestId, getByRole } = render(<TrialTabs />);
    const activeTab = getByTestId("active-tab");

    fireEvent.click(activeTab);

    let selectedTab = getByRole("tab", { selected: true });
    expect(activeTab).toEqual(selectedTab);
  });

  test("clicking the 'pending' tab should display active trials", () => {
    const { getByTestId, getByRole } = render(<TrialTabs />);
    const pendingTab = getByTestId("pending-tab");

    fireEvent.click(pendingTab);

    let selectedTab = getByRole("tab", { selected: true });
    expect(pendingTab).toEqual(selectedTab);
  });

  test("clicking the 'ended' tab should display active trials", () => {
    const { getByTestId, getByRole } = render(<TrialTabs />);
    const endedTab = getByTestId("ended-tab");

    fireEvent.click(endedTab);

    let selectedTab = getByRole("tab", { selected: true });
    expect(endedTab).toEqual(selectedTab);
  });

  // randomize
  test("mixture of clicks focuses on correct tab", () => {
    const { getByTestId, getByRole } = render(<TrialTabs />);
    const allTab = getByTestId("all-tab");
    const activeTab = getByTestId("active-tab");
    const pendingTab = getByTestId("pending-tab");
    const endedTab = getByTestId("ended-tab");
    let selectedTab;

    selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(allTab);
    fireEvent.click(endedTab);

    selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(endedTab);
    fireEvent.click(allTab);

    selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(allTab);
    fireEvent.click(pendingTab);

    selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(pendingTab);
    fireEvent.click(activeTab);

    selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(activeTab);
  });
});

// search bar successfully taking in info
describe("Search bar in test list", () => {
  test("search bar content should change on input", () => {
    const { getByTestId } = render(<SearchBar />);
    const searchInput = getByTestId("search").children[0];

    fireEvent.change(searchInput, {
      target: { value: "Joe" },
    });

    expect(searchInput).toHaveValue("Joe");
  });
});

// info cards successfully filtering through cards according to status
describe("Filtering of trial info cards", () => {
  //FIXME: Change w dummy data resembling what actually receive
  const dummyData = [
    {
      name: "Sam",
      patientsCompleted: "0/341",
      status: "pending",
      id: 1,
    },
    {
      name: "Tom",
      startDate: "4/30/20",
      patientsCompleted: "107/257",
      status: "active",
      id: 2,
    },
    {
      name: "joe",
      startDate: "12/12/12",
      completionDate: "4/22/20",
      patientsCompleted: "0/441",
      status: "ended",
      id: 3,
    },
    {
      name: "Doe",
      startDate: "1/1/31",
      completionDate: "4/16/40",
      patientsCompleted: "273/273",
      status: "ended",
      id: 4,
    },
  ];

  test("tab 'all' displays each data entry", () => {
    const { getAllByTestId } = render(
      <InfoCards data={dummyData} statusShow={"all"} />
    );
    const cardName = getAllByTestId("trial-name").map(li => li.textContent);

    const actualName = dummyData.map(x => x.name);

    expect(cardName).toEqual(actualName);
  });

  test("tab 'active' displays 'active' data entry", () => {
    const { getAllByTestId } = render(
      <InfoCards data={dummyData} statusShow={"active"} />
    );

    const cardStatus = getAllByTestId("trial-status").map(li => li.textContent);

    const areAllActive = cardStatus.every(status => status === "active");
    expect(areAllActive).toBe(true);
  });

  test("tab 'pending' displays 'pending' data entry", () => {
    const { getAllByTestId } = render(
      <InfoCards data={dummyData} statusShow={"pending"} />
    );

    const cardStatus = getAllByTestId("trial-status").map(li => li.textContent);

    const areAllPending = cardStatus.every(status => status === "pending");
    expect(areAllPending).toBe(true);
  });

  test("tab 'ended' displays 'ended' data entry", () => {
    const { getAllByTestId } = render(
      <InfoCards data={dummyData} statusShow={"ended"} />
    );

    const cardStatus = getAllByTestId("trial-status").map(li => li.textContent);

    const areAllEnding = cardStatus.every(status => status === "ended");
    expect(areAllEnding).toBe(true);
  });
});
