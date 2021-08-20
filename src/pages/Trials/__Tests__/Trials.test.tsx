import React from 'react'

import {render, screen, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SearchBar from "../TabBody/SearchBar";
import InfoCards from "../TabBody/Cards/InfoCards";
import TrialTabs from "../TrialTabs";


//Clicking through tabs changes status info cards status shown
describe("tabs clicking through correctly in Trials", () => {
    test("all tab double click", () => {
        const {getByTestId, getByRole } = render(<TrialTabs />)
        const allTab = getByTestId('all-tab')

        let selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(allTab);

        //double click
        fireEvent.click(allTab);
        fireEvent.click(allTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(allTab);
    })

    test("active tab selected on click", () => {
        const {getByTestId, getByRole } = render(<TrialTabs />)
        const allTab = getByTestId('all-tab')
        const activeTab = getByTestId('active-tab')

        let selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(allTab);
        fireEvent.click(activeTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(activeTab).toEqual(selectedTab);

        //double click
        fireEvent.click(activeTab);
        fireEvent.click(activeTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(activeTab).toEqual(selectedTab);
    })
    test("active tab selected on click", () => {
        const {getByTestId, getByRole } = render(<TrialTabs />)
        const allTab = getByTestId('all-tab')
        const activeTab = getByTestId('active-tab')


        let selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(allTab);
        fireEvent.click(activeTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(activeTab).toEqual(selectedTab);

        //double click
        fireEvent.click(activeTab);
        fireEvent.click(activeTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(activeTab).toEqual(selectedTab);
    })

    test("pending tab selected on click", () => {
        const {getByTestId, getByRole } = render(<TrialTabs />)
        const allTab = getByTestId('all-tab')
        const pendingTab = getByTestId('pending-tab')


        let selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(allTab);
        fireEvent.click(pendingTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(pendingTab).toEqual(selectedTab);

        //double click
        fireEvent.click(pendingTab);
        fireEvent.click(pendingTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(pendingTab).toEqual(selectedTab);
    })

    test("ending tab selected on click", () => {
        const {getByTestId, getByRole } = render(<TrialTabs />)
        const allTab = getByTestId('all-tab')
        const endingTab = getByTestId('ending-tab')


        let selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(allTab);
        fireEvent.click(endingTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(endingTab).toEqual(selectedTab);

        //double click
        fireEvent.click(endingTab);
        fireEvent.click(endingTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(endingTab).toEqual(selectedTab);
    })
    test("mixture of clicks focuses on correct tab", () => {
        const {getByTestId, getByRole } = render(<TrialTabs />)
        const allTab = getByTestId('all-tab')
        const activeTab = getByTestId('active-tab')
        const pendingTab = getByTestId('pending-tab')
        const endingTab = getByTestId('ending-tab')
        let selectedTab

        selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(allTab);
        fireEvent.click(endingTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(endingTab);
        fireEvent.click(allTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(allTab);
        fireEvent.click(pendingTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(pendingTab);
        fireEvent.click(activeTab);

        selectedTab = getByRole("tab", {selected: true})
        expect(selectedTab).toEqual(activeTab);
    })
})



//search bar successfully taking in info
describe("Search bar in test list", () => {
   test(("search bar changes input"), () => {
       const { getByTestId } = render(<SearchBar />)
       const searchEl = getByTestId("search")
       const searchInput = searchEl.children[0];

       fireEvent.change(searchInput, {
           target: {value: "Joe"}
       })

       expect(searchInput).toHaveValue("Joe")
   })
})



//info cards successfully filtering through cards according to status
describe("Filtering of trial info cards", () => {
    //FIXME: Change w dummy data resembling what actually receive
    const dummyData = [
            {
                "name": "Sam",
                "startDate": "6/12/21",
                "completionDate": "7/12/21",
                "patientsCompleted": "0/341",
                "status": "pending",
                "id": 1
            },
            {
                "name": "Tom",
                "startDate": "4/30/20",
                "completionDate": "7/10/80",
                "patientsCompleted": "107/257",
                "status": "active",
                "id": 2
            },
            {
                "name": "joe",
                "startDate": "12/12/12",
                "completionDate": "4/22/20",
                "patientsCompleted": "0/441",
                "status": "pending",
                "id": 3
            },
            {
                "name": "Doe",
                "startDate": "1/1/31",
                "completionDate": "4/16/40",
                "patientsCompleted": "273/273",
                "status": "ending",
                "id": 4
            }
            ]
    test("tab 'all' displays each data entry", () => {
        const { getAllByTestId } = render(<InfoCards data={dummyData} statusShow={"all"} />)
        const cardName = getAllByTestId("trial-name")
            .map((li) => (li.textContent))

        const actualName = dummyData.map((x) => x.name)

        expect(cardName).toEqual(actualName);
    })

    test("tab 'active' displays 'active' data entry", () => {
        const { getAllByTestId } = render(<InfoCards data={dummyData} statusShow={"active"} />)

        const cardStatus = getAllByTestId("trial-status")
            .map(li => li.textContent)

        const areAllActive = cardStatus.every((status) => status === "active");
        expect(areAllActive).toBe(true);
    })

    test("tab 'pending' displays 'pending' data entry", () => {
        const { getAllByTestId } = render(<InfoCards data={dummyData} statusShow={"pending"} />)

        const cardStatus = getAllByTestId("trial-status")
            .map(li => li.textContent)

        const areAllPending = cardStatus.every((status) => status === "pending");
        expect(areAllPending).toBe(true);
    })

    test("tab 'ending' displays 'ending' data entry", () => {
        const { getAllByTestId } = render(<InfoCards data={dummyData} statusShow={"ending"} />)

        const cardStatus = getAllByTestId("trial-status")
            .map(li => li.textContent)

        const areAllEnding = cardStatus.every((status) => status === "ending");
        expect(areAllEnding).toBe(true);
    })
})
