import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import MovieItem from "components/item/movieItem";
import React from "react";

import { colors, movieItem } from "../../../as-sources/source";

describe("Movie item component test", () => {
  beforeEach(() => {
    render(
      <MovieItem
        colors={colors}
        urlImage={movieItem.image}
        title={movieItem.title}
      />
    );
  });

  test("Check text", () => {
    expect(screen.getByText("The Dark Knight")).toBeVisible();
  });

  test("Check style", () => {
    expect(screen.getByText("The Dark Knight")).toHaveStyle({
      color: "#242424",
      fontFamily: "Gilroy-Medium",
      fontSize: 14,
      fontWeight: "400",
    });
  });

  test("Check visibility", () => {
    expect(screen.getByTestId("fast-image")).toBeVisible();
  });
});
