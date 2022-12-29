import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

export default function ItemsInCart({ image, name, price, quantity }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.conteinerIconDelete}>
        <Ionicons
          name="add-outline"
          size={28}
          color="#fff"
          style={{ left: 1, transform: [{ rotate: "45deg" }] }}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.wrapperInfoProduct}>
        <Text style={styles.nameProduct} numberOfLines={2}>
          {name}
        </Text>
        <View style={styles.wrapperPriceQuantity}>
          <Text style={styles.price}>
            $
            {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") * quantity}
          </Text>
          <View style={styles.circleQuantity}>
            <TouchableOpacity>
              <Text style={styles.signoQuantity}>-</Text>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity>
              <Text style={styles.signoQuantity}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F8EDE3",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 12,
  },
  conteinerIconDelete: {
    position: "absolute",
    right: 0,
    top: -14,
    backgroundColor: "#F90716",
    borderRadius: 100,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  wrapperInfoProduct: {
    justifyContent: "space-around",
    flex: 1,
  },
  wrapperPriceQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleQuantity: {
    flexDirection: "row",
    borderRadius: 100,
    paddingVertical: 1,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  nameProduct: {
    maxWidth: windowWidth - 180,
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: "#1A120B",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "#1A120B",
  },
  signoQuantity: {
    paddingHorizontal: windowWidth <= 360 ? 12 : 22,
    paddingHorizontal: windowWidth <= 360 ? 12 : 22,
  },
});
