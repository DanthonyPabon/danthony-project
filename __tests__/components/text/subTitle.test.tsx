import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import SubTitle from "components/text/subTitle";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("SubTitle text component test", () => {
  beforeEach(() => {
    render(<SubTitle txt="Search movies" colors={colors} />);
  });
  test("Check text", () => {
    expect(screen.getByText("Search movies")).toBeVisible();
  });

  test("Check style", () => {
    expect(screen.getByText("Search movies")).toHaveStyle({
      color: "#242424",
      fontFamily: "Gilroy-Medium",
      fontSize: 14,
      fontWeight: "400",
    });
  });
});
