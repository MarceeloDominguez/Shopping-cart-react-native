import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAppContext } from "../context/GlobalState";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const { numberOfItemsInCart } = useAppContext();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={styles.containerImageProfile}>
          <Image
            style={styles.imageProfile}
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <View>
            <Text style={styles.textHello}>Hello</Text>
            <Text style={styles.nameProfile}>John Lewis</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ProductsCart")}>
          <Ionicons name="cart-outline" size={28} color="#1A120B" />
          <Text style={styles.numberItemsCart}>{numberOfItemsInCart}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 24,
  },
  wrapperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerImageProfile: {
    flexDirection: "row",
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 6,
  },
  textHello: {
    fontSize: 13,
    letterSpacing: 0.4,
    fontWeight: "500",
  },
  nameProfile: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  numberItemsCart: {
    position: "absolute",
    right: -4,
    top: -7,
    backgroundColor: "#FF5B00",
    height: 18,
    width: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 100,
    fontSize: 13,
    zIndex: 2,
  },
});
