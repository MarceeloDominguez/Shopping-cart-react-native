import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <Ionicons
        name="cart-outline"
        size={24}
        color="#000"
        style={styles.icons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    letterSpacing: 0.5,
    fontWeight: "700",
  },
  icons: {
    height: 36,
    width: 36,
    textAlignVertical: "center",
    textAlign: "right",
  },
});
