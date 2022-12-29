import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ThumbnailsPhoto from "../components/ThumbnailsPhoto";
import ProductInformation from "../components/ProductInformation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../context/GlobalState";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Details({ route }) {
  const { addToCart, numberOfItemsInCart } = useAppContext();
  const { name, price, thumbnails, id } = route.params;
  const [selectImage, setSelectImage] = useState(thumbnails[0]);
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={{ uri: selectImage }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.arrowBack}>
            <Ionicons
              name="chevron-back-outline"
              size={28}
              color="#1A120B"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
          <TouchableOpacity
            style={styles.iconCart}
            onPress={() => navigation.navigate("ProductsCart")}
            activeOpacity={1}
          >
            <Ionicons name="cart-outline" size={28} color="#1A120B" />
            <Text style={styles.numberItemsCart}>{numberOfItemsInCart}</Text>
          </TouchableOpacity>
          <View style={styles.iconShare}>
            <Ionicons name="share-social-outline" size={28} color="#1A120B" />
          </View>
        </View>
        <ThumbnailsPhoto
          thumbnails={thumbnails}
          setSelectImage={setSelectImage}
          selectImage={selectImage}
        />
        <ProductInformation name={name} />
      </ScrollView>
      <View style={styles.wrapperPriceProduct}>
        <Text style={styles.priceProduct}>
          ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </Text>
        <TouchableOpacity
          style={styles.buttonAddCart}
          activeOpacity={0.6}
          onPress={() => addToCart(id)}
        >
          <Text style={styles.textButtonAddCart}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.5,
    backgroundColor: "#fff",
  },
  arrowBack: {
    position: "absolute",
    top: 20,
    left: 16,
  },
  iconCart: {
    position: "absolute",
    top: 20,
    right: 18,
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
  },
  iconShare: {
    position: "absolute",
    bottom: 20,
    right: 16,
    backgroundColor: "#FEFCF3",
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  wrapperPriceProduct: {
    backgroundColor: "#1A120B",
    height: 90,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  priceProduct: {
    fontSize: 20,
    fontWeight: "700",
    color: "#F8EDE3",
    letterSpacing: 0.5,
  },
  buttonAddCart: {
    backgroundColor: "#FF5B00",
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 100,
  },
  textButtonAddCart: {
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "#F8EDE3",
  },
});
