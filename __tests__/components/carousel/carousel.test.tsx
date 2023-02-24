import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Carousel from "components/carousel/carousel";
import React from "react";

import { colors, movieItem } from "../../../as-sources/source";

describe("Carousel component", () => {
  const onPress = jest.fn();

  beforeEach(() => {
    render(<Carousel colors={colors} items={[movieItem]} onPress={onPress} />);
  });

  test("Should render a list of items", () => {
    expect(screen.getByTestId("flatlist-carousel").props.data).toEqual([
      movieItem,
    ]);
  });

  test("Should call the onPress function when an item is pressed", () => {
    fireEvent.press(screen.getByTestId("press-item"));
    expect(onPress).toHaveBeenCalled();
  });

  test("Applies the correct styles", () => {
    expect(screen.getByTestId("container-carousel")).toHaveStyle({
      marginTop: 32,
    });
  });
});
