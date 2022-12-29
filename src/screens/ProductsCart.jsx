import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import ItemsInCart from "../components/ItemsInCart";
import { useAppContext } from "../context/GlobalState";

export default function ProductsCart() {
  const { cart, clearCart } = useAppContext();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Button title="Eliminar todo" onPress={() => clearCart()} />
      {cart.length === 0 && (
        <View style={styles.wrapperTextEmptyCart}>
          <Text style={styles.textEmptyCart} numberOfLines={1}>
            There are no products in the cart...
          </Text>
        </View>
      )}
      <View style={{ marginTop: 10 }}>
        {cart.map((item, index) => (
          <ItemsInCart {...item} key={index} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapperTextEmptyCart: {
    alignItems: "center",
    marginTop: 50,
  },
  textEmptyCart: {
    fontSize: 20,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
});
