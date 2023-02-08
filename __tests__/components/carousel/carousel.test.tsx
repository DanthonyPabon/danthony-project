import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Carousel from "components/carousel/carousel";
import React from "react";

import { colors, movieItem } from "../../../as-sources/source";

describe("Carousel component test", () => {
  beforeEach(() => {
    render(
      <Carousel
        colors={colors}
        movies={[movieItem]}
        onPress={() => jest.fn()}
      />
    );
  });

  test("Check press item", () => {
    fireEvent.press(screen.getByTestId("press-item"));
  });

  test("Check style container", () => {
    expect(screen.getByTestId("container-carousel")).toHaveStyle({
      marginTop: 32,
    });
  });

  test("Check flatlist", () => {
    screen.getByTestId("flatlist-carousel").props;
  });
});
