import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Pill from "components/pill/pill";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("Pill component test", () => {
  const getCategory = jest.fn();
  beforeEach(() => {
    render(
      <Pill title="Action" colors={colors} onPress={getCategory} isFocused />
    );
  });

  test("Check text", () => {
    expect(screen.getByText("Action")).toBeVisible();
  });

  test("Check style component", () => {
    expect(screen.getByTestId("pill")).toHaveStyle({
      alignSelf: "flex-start",
      backgroundColor: "#1FCF7C",
      borderRadius: 100,
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingVertical: 6,
    });
  });

  test("Check change status isFocused = false", () => {
    screen.update(
      <Pill title="Action" colors={colors} onPress={getCategory} />
    );
    expect(screen.getByTestId("pill")).toHaveStyle({
      alignSelf: "flex-start",
      backgroundColor: "#ebebeb",
      borderRadius: 100,
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingVertical: 6,
    });
  });

  test("Check style text", () => {
    expect(screen.getByText("Action")).toHaveStyle({
      color: "#242424",
      fontFamily: "Gilroy-Medium",
      fontSize: 12,
      fontWeight: "400",
    });
  });
});
