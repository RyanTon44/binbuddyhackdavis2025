import React from 'react';
import { View, Text, Image } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#82bf9c' }}>
       <Image
          source={require('../../assets/images/Cloud1.png')}
    style={{ width: 300, height: 300, marginBottom: 20, position: 'absolute', left: 300,}}
    resizeMode="contain"
  />
  <Image
          source={require('../../assets/images/Cloud2.png')}
    style={{ width: 300, height: 300, marginBottom: 20, position: 'absolute', right: 300,}}
    resizeMode="contain"
  />
      <Text style={{ fontFamily:'PoppinsBold', color: '#e8e6e6', fontSize: 30, position: 'absolute', alignSelf: 'center', marginTop: 225 }}
      >Welcome to BinBuddy!</Text>
      <Image
          source={require('../../assets/images/BinBuddy.png')}
    style={{ width: 300, height: 300, position: 'absolute', alignSelf: 'center', marginTop: 300}}
    resizeMode="contain"
  />
  <Image
          source={require('../../assets/images/earth.png')}
    style={{ width: 175, height: 175, position: 'absolute', alignSelf: 'center', marginTop: 50}}
    resizeMode="contain"
    />
  <Text style={{ fontFamily:'PoppinsBold', color: '#e8e6e6', fontSize: 20, position: 'absolute', alignSelf: 'center', marginTop: 650, textAlign: 'center' }}
      >Press the search button if you're unsure about where trash goes!</Text> 
    </View>
    
  );
}
//496580