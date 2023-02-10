import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Title from "components/text/title";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("Title text component test", () => {
  beforeEach(() => {
    render(<Title txt="Latest Movie" colors={colors} />);
  });

  test("Check text", () => {
    expect(screen.getByText("Latest Movie")).toBeVisible();
  });

  test("Check style", () => {
    expect(screen.getByText("Latest Movie")).toHaveStyle({
      color: "#242424",
      fontFamily: "Gilroy-Medium",
      fontSize: 20,
      fontWeight: "700",
    });
  });
});
