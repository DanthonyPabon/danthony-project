import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Container from "components/container";
import React from "react";
import { Text } from "react-native-svg";

import { colors } from "../../as-sources/source";

jest.mock("react-native-safe-area-context", () => {
  const inset = { bottom: 0, left: 0, right: 0, top: 0 };
  return {
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

describe("Container component test", () => {
  test("Check container's children", () => {
    render(
      <Container colors={colors}>
        <Text>its a element inside to the container</Text>
      </Container>
    );
    expect(
      screen.getByTestId("container").props.children.props.children
    ).toEqual("its a element inside to the container");
  });

  test("Check style", () => {
    render(
      <Container colors={colors}>
        <Text>its a element inside to the container</Text>
      </Container>
    );
    expect(screen.getByTestId("container")).toHaveStyle({
      backgroundColor: "#ffffff",
      flex: 1,
      paddingBottom: 0,
      paddingHorizontal: 32,
      paddingTop: 0,
    });
  });

  test("Check style with scroll", () => {
    render(
      <Container colors={colors} withScroll>
        <Text>its a element inside to the container</Text>
      </Container>
    );
    expect(screen.getByTestId("container-scroll")).toHaveStyle({
      backgroundColor: "#ffffff",
      flex: 1,
      paddingBottom: 0,
      paddingHorizontal: 32,
      paddingTop: 0,
    });
  });
});
