import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Image} from 'react-native'
import { FontAwesome} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/login.png')} 
      style={{ width: 140, height: 140, borderRadius: 300, marginTop: 20 }}/>
      <Text style={styles.text}>Join Us!</Text>
   <Text style={styles.textoPequeno}>Your name:</Text>
      <TextInput style={styles.input}placeholder='Enter you full name'/>

      <Text style={styles.textoPequeno}>Your Email</Text>
      <TextInput style={styles.input}placeholder='hello@gmail.com'/>

      <Text style={styles.textoPequeno}>Password</Text>
      <TextInput style={styles.input}placeholder='Enter your password'/>

      <View style = {styles.dividirContainer} >
        <View style = {styles.line} />
        <Text Style = {styles.dividirText}> or </Text>
        <View style = {styles.line} />
      </View>

    <View style={styles.socialRow} >

      <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='google' size={20} color = '#758fad'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='facebook' size={20} color = '#758fad'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} >
        <FontAwesome name ='instagram' size={20} color = '#758fad'/>
      </TouchableOpacity>


    </View>
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

  
  textoPequeno: {
    color: 'black',
    fontSize: 12,
    marginTop: 20,
    marginLeft: -250,
    },

  input: {
    height: 40,
    borderColor:' #92a6ff',
    backgroundColor: '#e7f8ff',
    borderWidth: 1.5,
    width: '80%',
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  dividirContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },

  dividirText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },

  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0faff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMain: {
    backgroundColor: '#00ADEF',
    width: '88%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffSet: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonMainText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


