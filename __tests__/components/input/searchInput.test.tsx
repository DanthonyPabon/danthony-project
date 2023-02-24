import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import SearchInput from "components/input/searchInput";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("Search input component", () => {
  const testID = "search-input";
  const testText = "Search movies...";

  beforeEach(() => {
    render(<SearchInput placeholder={testText} colors={colors} />);
  });

  test("Renders the correct text", () => {
    fireEvent.changeText(screen.getByTestId(testID), "The avengers");
    screen.getByPlaceholderText(testText);
    expect(screen.getByTestId(testID).props.value).toBe("The avengers");
  });

  test("Applies the correct styles", () => {
    expect(screen.getByTestId("container-input")).toHaveStyle({
      backgroundColor: "#ebebeb",
      borderRadius: 50,
      flexDirection: "row",
      padding: 32,
    });
  });

  test("Applies the correct styles in input", () => {
    expect(screen.getByTestId(testID)).toHaveStyle({
      color: "#242424",
      marginLeft: 8,
    });
  });

  test("Check visibility", () => {
    expect(screen.getByTestId(testID)).toBeVisible();
  });
});
