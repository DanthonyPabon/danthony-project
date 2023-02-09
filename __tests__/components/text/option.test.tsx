import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Option from "components/text/option";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("Option text component test", () => {
  beforeEach(() => {
    render(<Option txt="View all" colors={colors} />);
  });

  test("Check text", () => {
    expect(screen.getByText("View all")).toBeVisible();
  });

  test("Check style", () => {
    expect(screen.getByText("View all")).toHaveStyle({
      color: "#242424",
      fontFamily: "Gilroy-Medium",
      fontSize: 12,
      fontWeight: "400",
    });
  });
});
