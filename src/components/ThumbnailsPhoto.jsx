import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ThumbnailsPhoto({
  thumbnails,
  setSelectImage,
  selectImage,
}) {
  return (
    <View style={styles.wrapperThumbnails}>
      {thumbnails.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectImage(item)}
          activeOpacity={1}
        >
          <Image
            source={{ uri: item }}
            style={[
              {
                borderColor: selectImage === item ? "#FF5B00" : "#ccc",
                opacity: selectImage === item ? 1 : 0.5,
              },
              styles.thumbnails,
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperThumbnails: {
    flexDirection: "row",
    paddingLeft: 10,
    marginTop: 10,
  },
  thumbnails: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
  },
});
