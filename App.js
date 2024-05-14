import { StyleSheet, Text, View } from 'react-native';
import { React, Component } from 'react';
import Conversor from './src/conversor';
// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_rd2et5EbYmLKBGQB7rA78AnuO4lkd8dxHHMaJQie&currencies=BRL
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;