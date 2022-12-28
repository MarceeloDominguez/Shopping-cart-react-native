import React from "react";
import { FlatList } from "react-native";
import Products from "../data/data";
import RenderProducts from "./RenderProducts";

export default function ListProducts({ selectedIndex }) {
  const productsFiltered = Products.filter(
    (item) => item.categoryIndex === selectedIndex
  );

  return (
    <FlatList
      data={productsFiltered}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <RenderProducts products={item} />}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignSelf: "center",
      }}
    />
  );
}
