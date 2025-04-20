import React, { useState }from 'react';
import { View, Text, Image } from 'react-native';

export default function aboutUs() {
  
  return (
    <View style={{ flex: 1, backgroundColor: '#82bf9c' }}>
      <Text style={{ fontFamily:'PoppinsBold', color: '#e8e6e6', fontSize: 25, 
        position: 'absolute', alignSelf: 'center', marginTop: 100 }}>About us and our Mission!</Text>
        <Image
                  source={require('../../assets/images/BinBuddy.png')}
            style={{ width: 200, height: 200, position: 'absolute', alignSelf: 'center', marginTop: 160}}
            resizeMode="contain"
          />
          <Text style={{ fontFamily:'PoppinsBold', color: '#e8e6e6', fontSize: 20, 
        position: 'absolute', marginRight: 50, marginLeft: 50, marginTop: 375, textAlign: 'center' }}>BinBuddy is an app to help people properly dispose of trash utilizing AI!
        We believe that preserving our planet is extremely important, and want to ensure everyone can play their part in this mission. {'\n'} {'\n'}
        You can ask BinBuddy any question about where trash goes, and he'll give you an environmentally friendly response!</Text>
    </View>
  );
}

