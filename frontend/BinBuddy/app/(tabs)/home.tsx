import React from 'react';
import { View, Text, Image } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#82bf9c' }}>
       <Image
          source={require('../../assets/images/Cloud1.png')}
    style={{ width: 300, height: 300, marginBottom: 20, position: 'absolute', top: 100, left: 300,}}
    resizeMode="contain"
  />
  <Image
          source={require('../../assets/images/Cloud2.png')}
    style={{ width: 300, height: 300, marginBottom: 20, position: 'absolute', top: 100, right: 300,}}
    resizeMode="contain"
  />
      <Text style={{ fontFamily:'Milkyway', color: '#e8e6e6', fontSize: 60, position: 'absolute', alignSelf: 'center', marginTop: 200 }}>Welcome to BinBuddy!</Text>
      <Image
          source={require('../../assets/images/BinBuddy.png')}
    style={{ width: 300, height: 300, position: 'absolute', alignSelf: 'center', marginTop: 300}}
    resizeMode="contain"
  />
    </View>
    
  );
}
//496580