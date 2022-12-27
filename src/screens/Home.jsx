import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ListOfSportsBrands from "../components/ListOfSportsBrands";
import ListProducts from "../components/ListProducts";
import Title from "../components/Title";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Title />
      <ListOfSportsBrands
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <ListProducts selectedIndex={selectedIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
  },
});
