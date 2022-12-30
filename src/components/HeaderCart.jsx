import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAppContext } from "../context/GlobalState";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderCart() {
  const { cart, clearCart } = useAppContext();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back-outline"
        size={28}
        color="#1A120B"
        onPress={() => navigation.goBack()}
      />
      {cart.length !== 0 && (
        <TouchableOpacity onPress={() => clearCart()}>
          <Text style={styles.textEmptyCart}>Empty cart ({cart.length})</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  textEmptyCart: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "#FF5B00",
  },
});
