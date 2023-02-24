import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Title from "components/text/title";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("Title component", () => {
  const testText = "Latest Movie";
  const testColor = colors.textTitle;

  beforeEach(() => {
    render(<Title color={testColor}>{testText}</Title>);
  });

  test("Renders the correct text", () => {
    expect(screen.getByText(testText)).toBeVisible();
  });

  test("Applies the correct styles", () => {
    expect(screen.getByText(testText)).toHaveStyle({
      color: testColor,
      fontFamily: "Gilroy-Medium",
      fontSize: 20,
      fontWeight: "700",
    });
  });
});
