import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Title from './src/components/Title'

export default function App () {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <Title />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  }
})
