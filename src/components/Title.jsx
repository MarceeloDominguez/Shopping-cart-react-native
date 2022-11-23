import React from 'react'
import { View, Text, StyleSheet } from 'react-native' 
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Discover</Text>
      <View style={{ flexDirection: 'row'}}>
        <Ionicons name="notifications-outline" size={24} color="#000" style={[{marginRight: 8}, styles.icons]} />
        <Ionicons name="share-social-outline" size={24} color="#000" style={styles.icons}  />
      </View>
    </View> 
  )
}
 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 22,
        letterSpacing: 0.5,
        fontWeight: '700'
    },
    icons: {
        height: 36,
        width: 36,
        borderRadius: 18,
        borderWidth: 0.5,    
        textAlignVertical: 'center',   
        textAlign: 'center',
    }
})