import { render, fireEvent, screen } from "@testing-library/react";
import AddSitesLayout from "./AddSitesLayout";
import SiteDetails from "./SiteDetails";
import TeamMemberDetails from "./TeamMemberDetails";

describe("all input responds to user", () => {
  test("text input should change on user input", () => {
    expect(true).toBe(true);
    const { getByTestId } = render(<AddSitesLayout />);
    const nameInput = getByTestId("nameInput");
    const streetInput = getByTestId("streetInput");
    const cityInput = getByTestId("cityInput");
    const zipInput = getByTestId("zipInput");

    fireEvent.change(nameInput, {
      target: { value: "A Lovely outing" },
    });

    fireEvent.change(streetInput, {
      target: { value: "france st" },
    });

    fireEvent.change(cityInput, {
      target: { value: "Paris" },
    });

    fireEvent.change(zipInput, {
      target: { value: "123456" },
    });

    expect(nameInput).toHaveValue("A Lovely outing");
    expect(streetInput).toHaveValue("france st");
    expect(cityInput).toHaveValue("Paris");
    expect(zipInput).toHaveValue("123456");
  });

  // test("select (drop down menu) should change on user input", () => {
  //   const mockHandleSiteChange = jest.fn();
  //   var teammember: string[] = [];
  //   const { getByTestId, getAllByTestId, getAllByRole } = render(
  //     <TeamMemberDetails
  //       teammember={teammember}
  //       handleSiteChange={mockHandleSiteChange}
  //     />
  //   );
  //
  //   const select = getByTestId("teammemberSelect");
  //
  //   const option = select.childNodes[0].childNodes[0];
  //   fireEvent.change(option, { target: { value: "alexander hamilton" } });
  //
  //   expect(mockHandleSiteChange.mock.calls).toHaveLength(1);
  // });
});
