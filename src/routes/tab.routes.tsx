import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";

export function TabRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
