import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { darkModeProvider } from "providers/state-provider";
import React, { useContext, useEffect } from "react";
import { StatusBar } from "react-native";
import DetailPage from "screens/detailPage";
import HomePage from "screens/homePage";
import { theme } from "styles/theme";
import RouteNames from "utils/navigation";

const Stack = createStackNavigator();

const DefaultOptions = { gestureEnabled: true, headerShown: false };

export default function AppStack() {
  const globalStore = useContext(darkModeProvider);
  const { darkMode } = globalStore.darkModeState;

  useEffect(() => {
    StatusBar.setBarStyle(darkMode ? "light-content" : "dark-content");
  }, [darkMode]);

  return (
    <NavigationContainer theme={theme[darkMode ? "dark" : "light"]}>
      <Stack.Navigator initialRouteName={RouteNames.HomePage}>
        <Stack.Screen
          name={RouteNames.HomePage}
          component={HomePage}
          options={DefaultOptions}
        />
        <Stack.Screen
          name={RouteNames.DetailPage}
          component={DetailPage}
          options={DefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
