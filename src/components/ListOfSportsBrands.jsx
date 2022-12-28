import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const marcas = [
  "https://http2.mlstatic.com/D_Q_NP_602821-MLA32347730883_092019-G.webp",
  "https://http2.mlstatic.com/D_Q_NP_938404-MLA32348277016_092019-G.webp",
  "https://http2.mlstatic.com/D_Q_NP_770676-MLA32348274541_092019-G.webp",
  "https://http2.mlstatic.com/D_Q_NP_768917-MLA42177911975_062020-G.webp",
];

export default function ListOfSportsBrands({
  setSelectedIndex,
  selectedIndex,
}) {
  return (
    <View style={styles.container}>
      {marcas.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() => setSelectedIndex(index)}
        >
          <Image
            source={{ uri: item }}
            style={[
              {
                borderColor: selectedIndex === index ? "#FF5B00" : "#ccc",
                opacity: selectedIndex === index ? 1 : 0.7,
              },
              styles.image,
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 100,
  },
});
