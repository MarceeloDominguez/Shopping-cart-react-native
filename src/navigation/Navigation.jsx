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
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{ headerTransparent: true, headerTitle: "" }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ProductsCart" component={ProductsCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
