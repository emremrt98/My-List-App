import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selamlar</Text>
      <Text style={styles.text2}>Hello World</Text>
      <Text style={{flex: 1, backgroundColor: 'white', fontSize: 36}}>Inline Css</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    backgroundColor: 'white',
    fontSize: 24,
    color: 'gray',
  },
  text2: {
    flex: 3,
    backgroundColor: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
  },
});
