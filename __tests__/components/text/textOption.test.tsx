import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import TextOption from "components/text/textOption";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("Text option component", () => {
  const testText = "Latest Movie";
  const testColor = colors.textTitle;

  beforeEach(() => {
    render(<TextOption color={testColor}>{testText}</TextOption>);
  });

  test("Renders the correct text", () => {
    expect(screen.getByText(testText)).toBeVisible();
  });

  test("Applies the correct styles", () => {
    expect(screen.getByText(testText)).toHaveStyle({
      color: testColor,
      fontFamily: "Gilroy-Medium",
      fontSize: 14,
      fontWeight: "400",
    });
  });
});
