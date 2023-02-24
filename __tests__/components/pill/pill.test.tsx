import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Pill from "components/pill/pill";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("Pill component test", () => {
  const onPress = jest.fn();
  const testText = "Action";

  beforeEach(() => {
    render(
      <Pill title={testText} colors={colors} onPress={onPress} isFocused />
    );
  });

  test("Renders the correct text", () => {
    expect(screen.getByText(testText)).toBeVisible();
  });

  test("Check style component", () => {
    expect(screen.getByTestId("pill")).toHaveStyle({
      alignSelf: "flex-start",
      backgroundColor: "#1FCF7C",
      borderRadius: 100,
      flexDirection: "row",
      paddingHorizontal: 22,
      paddingVertical: 10,
    });
  });

  test("Check style component when isFocused changes", () => {
    screen.update(<Pill title={testText} colors={colors} onPress={onPress} />);
    expect(screen.getByTestId("pill")).toHaveStyle({
      alignSelf: "flex-start",
      backgroundColor: "#ebebeb",
      borderRadius: 100,
      flexDirection: "row",
      paddingHorizontal: 22,
      paddingVertical: 10,
    });
  });

  test("Check style text", () => {
    expect(screen.getByText(testText)).toHaveStyle({
      color: "#242424",
      fontFamily: "Gilroy-Medium",
      fontSize: 14,
      fontWeight: "400",
    });
  });
});
