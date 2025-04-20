import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey', 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            borderTopColor: 'transparent',
            backgroundColor: '#d1cfcf',
            position: 'absolute',
            height: 65,
          },
          default: {
          backgroundColor: '#d1cfcf',
          position: 'absolute',
          borderTopColor: 'transparent'
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'index',
          tabBarIcon: ({ color, focused }) =>       
          <Image source={require('../../assets/images/home.png')}
          style={{
            marginTop: 15,
            width: 50,
            height: 50,
            tintColor: focused ? 'black' : 'grey', 
          }}
        />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) =>       
            <Image source={require('../../assets/images/search.png')}
            style={{
              marginTop: 15,
              width: 30,
              height: 30,
              tintColor: focused ? 'black' : 'grey', 
            }}
          />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="aboutUs"
        options={{
          title:'aboutUs',
          tabBarIcon: ({ color, focused }) =>       
            <Image source={require('../../assets/images/aboutUs.png')}
            style={{
              marginTop: 15,
              width: 35,
              height: 35,
              tintColor: focused ? 'black' : 'grey', 
            }}
          />,
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
