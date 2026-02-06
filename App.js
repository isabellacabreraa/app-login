import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/login.png')} 
      style={{ width: 140, height: 140, borderRadius: 300, marginTop: 20 }}/>
      <Text style={styles.text}>Join Us!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758fad',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

