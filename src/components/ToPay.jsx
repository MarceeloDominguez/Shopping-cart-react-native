import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAppContext } from "../context/GlobalState";

export default function ToPay() {
  const { priceTotal } = useAppContext();
  let shipping = 1200;
  const priceFinal = priceTotal + shipping;

  return (
    <View style={styles.container}>
      <View style={[styles.wrapperResume, { marginBottom: 10 }]}>
        <Text style={styles.textResume}>Sub Total</Text>
        <Text style={styles.price}>
          ${priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </Text>
      </View>
      <View style={styles.wrapperResume}>
        <Text style={styles.textResume}>Shipping</Text>
        <Text style={styles.price}>
          ${shipping.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.wrapperPriceFinal}>
        <View>
          <Text style={styles.textTotal}>Total</Text>
          <Text style={styles.priceFinal}>
            {" "}
            ${priceFinal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonPay} activeOpacity={0.6}>
          <Text style={styles.textButtonPay}>Proceed To Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A120B",
    padding: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  wrapperResume: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textResume: {
    fontSize: 13,
    letterSpacing: 0.4,
    fontWeight: "500",
    color: "#F8EDE3",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#F8EDE3",
  },
  wrapperPriceFinal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTotal: {
    color: "#F8EDE3",
    fontSize: 13,
    letterSpacing: 0.4,
    fontWeight: "500",
  },
  priceFinal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8EDE3",
  },
  buttonPay: {
    backgroundColor: "#90A17D",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textButtonPay: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#90A17D",
    marginVertical: 24,
  },
});
