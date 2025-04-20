import React, { useState }from 'react';
import { View, Text, TextInput, StyleSheet, Image, Pressable } from 'react-native';

export default function SearchScreen() {
  const [text, setText] = useState('');
  const [confirmedName, setConfirmedName] = useState('');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#82bf9c',
      alignItems: 'center',
      paddingTop: 100,
    },
    title: {
      fontFamily: 'PoppinsBold',
      fontSize: 40,
      color: '#e8e6e6',
      marginBottom: 40,
    },
    input: {
      width: '30%',
      height: 50,
      borderColor: '#333',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 18,
      backgroundColor: 'white',
      color: 'black',
      position: 'absolute', 
      alignSelf: 'center', 
      marginTop: 450
    },
      button: {
        backgroundColor: '#000000',
        width: '15%',
        height: 50,
        position: 'absolute', 
        alignSelf: 'center', 
        marginTop: 525,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'PoppinsBold',
      },
    });

    const handleConfirm = () => {
      setConfirmedName(text); 
      alert(`Welcome, ${text}!`);
    };

  return (
    <View style={{ flex: 1, backgroundColor: '#82bf9c' }}>
      <Text style={{ fontFamily:'PoppinsBold', color: '#e8e6e6', fontSize: 40, 
        position: 'absolute', alignSelf: 'center', marginTop: 100 }}>First time using BinBuddy?</Text>
        <Image
                  source={require('../../assets/images/BinBuddy.png')}
            style={{ width: 200, height: 200, position: 'absolute', alignSelf: 'center', marginTop: 160}}
            resizeMode="contain"
          />
          <Text style={{ fontFamily:'PoppinsBold', color: '#e8e6e6', fontSize: 30, 
        position: 'absolute', alignSelf: 'center', marginTop: 375 }}>Tell me your name!</Text>
         <TextInput
        style={styles.input }
        placeholder="Type your name..."
        value={text}
        onChangeText={setText}
        placeholderTextColor="#999"
      />
      <Pressable style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </Pressable>
    
    </View>

  );
}

