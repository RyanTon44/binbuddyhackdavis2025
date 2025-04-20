import React, {useState} from 'react';
import axios from 'axios';
import { View, Text, TextInput, StyleSheet, Pressable, ImageBackground  } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      paddingTop: 15,
      alignItems: 'center',
      backgroundColor: '#82bf9c',
    },
    input: {
      width: '80%',
      height: 50,
      borderColor: '#333',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 20,
      fontSize: 18,
      backgroundColor: 'white',
      color: 'black',
      marginTop: 10,        
      alignSelf: 'center'
    },
      button: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 15
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'PoppinsBold',
      },
    },
  );

export default function Search() {
  const [result, setResult] = useState('');
    const [text, setText] = useState('');
    const handleConfirm = async () => {
      if (!text.trim()) return;
      console.log("Sending to API:", text.trim());
    
      try {
        const response = await axios.post("http://172.20.10.2:3000/api/classify", {
          item: text.trim(),
        });
        console.log('API response:', response.data);

        const data = response.data;
        let resultMessage = `Bin: ${data.bin}\nReason: ${data.reason}`;
        if (data.note) {
          resultMessage += `\nNote: ${data.note}`;
        }

        let message = `Bin: ${data.bin}\nReason: ${data.reason}`;
        if (data.note) {
          message += `\nNote: ${data.note}`;
        }
        setResult(message);
    
      } catch (error) {
      }
    };
    
  return (
    <ImageBackground
        source={require('../../assets/images/searchbackground.png')}
        style={{ flex: 1, alignItems: 'center' }}
        resizeMode="contain" 
    >
      <Text style={{ fontFamily:'PoppinsBold', color: '#ffff', fontSize: 40, marginTop: 60 }}>Search Page</Text>
      <TextInput
        style={styles.input}
        placeholder="What do you want to throw away?"
        value={text}
        onChangeText={setText}
        placeholderTextColor="#999"
      /> 
      <Pressable style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Ask!</Text>
        </Pressable>
        {result.length > 0 && (
  <View style={{ marginTop: 100, paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 30, color: 'white', fontFamily: 'PoppinsBold', textAlign: 'center' }}>
      BinBuddy Says:
    </Text>
    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontFamily: 'PoppinsBold' }}> {result}
    </Text>
  </View>
        )}
      </ImageBackground>
  );
}