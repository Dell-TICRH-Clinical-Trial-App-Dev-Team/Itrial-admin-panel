import React from "react";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchBar from "../../components/SearchBar";
import InfoCards from "./TabBody/Cards/InfoCards";
import SiteTabs from "./SiteTabs";

import { Site } from "../../api/models";
import dummySiteData from "./dummySiteData";

describe("clicking tabs for site states", () => {
  test("clicking the 'all' tab should display all sites", () => {
    const { getByTestId, getByRole } = render(<SiteTabs />);
    const allTab = getByTestId("all-tab");

    let selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(allTab);

    fireEvent.click(allTab);

    selectedTab = getByRole("tab", { selected: true });
    expect(selectedTab).toEqual(allTab);
  });

  test("clicking the 'active' tab should display active sites", () => {
    const { getByTestId, getByRole } = render(<SiteTabs />);
    const activeTab = getByTestId("active-tab");

    fireEvent.click(activeTab);

    let selectedTab = getByRole("tab", { selected: true });
    expect(activeTab).toEqual(selectedTab);
  });

  test("clicking the 'inactive' tab should display inactive sites", () => {
    const { getByTestId, getByRole } = render(<SiteTabs />);
    const inactiveTab = getByTestId("inactive-tab");

    fireEvent.click(inactiveTab);

    let selectedTab = getByRole("tab", { selected: true });
    expect(inactiveTab).toEqual(selectedTab);
  });
});

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

describe("Filtering of site info cards", () => {
  const dummySites: Site[] = dummySiteData;

  test("tab 'all' should display each data entry", () => {
    const { getAllByTestId } = render(
      <InfoCards sites={dummySites} statusShow={0} />
    );
    const cardName = getAllByTestId("site-name").map((li) => li.textContent);

    const actualName = dummySites.map((x) => x.name);

    expect(cardName).toEqual(actualName);
  });

  test("tab 'active' should display sites with at least 1 active trial", () => {
    const { getAllByTestId } = render(
      <InfoCards sites={dummySites} statusShow={1} />
    );

    const sitesActiveTrials = getAllByTestId("site-active-trials").map(
      (li) => li.textContent as string
    );

    const areAllActive = sitesActiveTrials.every(
      (activeTrials) => parseInt(activeTrials) > 0
    );
    expect(areAllActive).toBe(true);
  });

  test("tab 'inactive' should display sites with 0 active trials", () => {
    const { getAllByTestId } = render(
      <InfoCards sites={dummySites} statusShow={2} />
    );

    const sitesActiveTrials = getAllByTestId("site-active-trials").map(
      (li) => li.textContent as string
    );

    const areAllActive = sitesActiveTrials.every(
      (activeTrials) => parseInt(activeTrials) == 0
    );
    expect(areAllActive).toBe(true);
  });
});
