import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import MovieItem from "components/item/movieItem";
import React from "react";

import { colors, movieItem } from "../../../as-sources/source";

describe("Movie item component test", () => {
  const textTest = "The Dark Knight";

  beforeEach(() => {
    render(
      <MovieItem
        colors={colors}
        urlImage={movieItem.image}
        title={movieItem.title}
      />
    );
  });

  test("Renders the correct text", () => {
    expect(screen.getByText(textTest)).toBeVisible();
  });

  test("Applies the correct styles", () => {
    expect(screen.getByText(textTest)).toHaveStyle({
      color: "#242424",
      fontFamily: "Gilroy-Medium",
      fontSize: 16,
      fontWeight: "400",
    });
  });

  test("Should render image and be visible", () => {
    expect(screen.getByTestId("fast-image")).toBeVisible();
  });
});
