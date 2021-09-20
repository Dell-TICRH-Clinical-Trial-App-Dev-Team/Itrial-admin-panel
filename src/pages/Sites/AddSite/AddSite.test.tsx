import { render, fireEvent, screen } from "@testing-library/react";
import AddSitesLayout from "./AddSitesLayout";
import SiteDetails from "./SiteDetails";
import TeamMemberDetails from "./TeamMemberDetails";

describe("all input responds to user", () => {
  test("text input should change on user input", () => {
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
});
