import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import SubTitle from "components/text/subTitle";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("SubTitle text component", () => {
  const testText = "Search movies";
  const testColor = colors.textSubTitle;

  beforeEach(() => {
    render(<SubTitle color={testColor}>{testText}</SubTitle>);
  });

  test("Renders the correct text", () => {
    expect(screen.getByText(testText)).toBeVisible();
  });

  test("Applies the correct styles", () => {
    expect(screen.getByText(testText)).toHaveStyle({
      color: "#242424",
      fontFamily: "Gilroy-Medium",
      fontSize: 16,
      fontWeight: "400",
    });
  });
});
