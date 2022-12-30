import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ItemsInCart from "../components/ItemsInCart";
import { useAppContext } from "../context/GlobalState";
import HeaderCart from "../components/HeaderCart";
import ToPay from "../components/ToPay";

export default function ProductsCart() {
  const { cart } = useAppContext();

  return (
    <>
      <HeaderCart />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {cart.length === 0 && (
          <View style={styles.wrapperTextEmptyCart}>
            <Text style={styles.textEmptyCart} numberOfLines={1}>
              There are no products in the cart...
            </Text>
          </View>
        )}
        <View style={{ paddingTop: 14 }}>
          {cart.map((item, index) => (
            <ItemsInCart {...item} key={index} />
          ))}
        </View>
      </ScrollView>
      {cart.length !== 0 && <ToPay />}
    </>
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
