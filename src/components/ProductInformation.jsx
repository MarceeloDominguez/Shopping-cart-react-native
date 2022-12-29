import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

export default function ProductInformation({ name }) {
  return (
    <>
      <Text style={styles.nameProduct} numberOfLines={2}>
        {name}
      </Text>
      <View style={styles.wrapperReviews}>
        <Ionicons name="star" size={12} style={styles.iconStar} />
        <Text style={styles.reviews}>5.0 (1520 reviews)</Text>
      </View>
      <View>
        <Text style={styles.titleDescription}>Product Description</Text>
        <Text numberOfLines={3} style={styles.descriptionProduct}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  nameProduct: {
    fontSize: 20,
    left: 20,
    marginTop: 20,
    fontWeight: "bold",
    letterSpacing: 0.6,
    maxWidth: windowWidth,
    lineHeight: 25,
    color: "#1A120B",
    maxWidth: windowWidth - 40,
  },
  wrapperReviews: {
    flexDirection: "row",
    left: 20,
    marginTop: 10,
    alignItems: "center",
  },
  iconStar: {
    color: "#FF5B00",
    marginRight: 8,
  },
  reviews: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "#1A120B",
    textTransform: "capitalize",
  },
  titleDescription: {
    left: 20,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  descriptionProduct: {
    left: 20,
    marginTop: 5,
    fontSize: 14,
    maxWidth: windowWidth - 40,
    letterSpacing: 0.6,
    lineHeight: 20,
    fontWeight: "500",
    opacity: 0.6,
    marginBottom: 26,
  },
});
