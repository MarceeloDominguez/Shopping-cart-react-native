import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function RenderProducts({ products }) {
  const navigation = useNavigation();
  const { name, image, price } = products;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Details", products)}
    >
      <Text style={styles.title} numberOfLines={2}>
        {name}
      </Text>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: image }}
          style={styles.imageProduct}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.price}>
        ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    elevation: 6,
    paddingVertical: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.8,
    paddingLeft: 10,
    paddingTop: 5,
    maxWidth: 140,
    color: "#1A120B",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.4,
  },
  imageProduct: {
    width: 140,
    height: 150,
  },
  price: {
    fontSize: 20,
    letterSpacing: 0.5,
    fontWeight: "700",
    paddingLeft: 10,
    paddingBottom: 5,
    color: "#1A120B",
  },
});
