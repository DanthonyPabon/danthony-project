import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import SearchInput from "components/input/searchInput";
import React from "react";

import { colors } from "../../../as-sources/source";

describe("Search input component test", () => {
  const testID = "search-input";
  beforeEach(() => {
    render(<SearchInput placeholder={"Search movies..."} colors={colors} />);
  });

  test("Check text", () => {
    fireEvent.changeText(screen.getByTestId(testID), "The avengers");
    screen.getByPlaceholderText("Search movies...");
    expect(screen.getByTestId(testID).props.value).toBe("The avengers");
  });

  test("Check style container input", () => {
    expect(screen.getByTestId("container-input")).toHaveStyle({
      backgroundColor: "#ebebeb",
      borderRadius: 50,
      flexDirection: "row",
      padding: 32,
    });
  });

  test("Check style input", () => {
    expect(screen.getByTestId(testID)).toHaveStyle({
      color: "#242424",
      marginLeft: 8,
    });
  });

  test("Check visibility", () => {
    expect(screen.getByTestId(testID)).toBeVisible();
  });
});
