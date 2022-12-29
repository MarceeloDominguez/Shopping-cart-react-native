import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import ProductsCart from "../screens/ProductsCart";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: "",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductsCart"
          component={ProductsCart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
