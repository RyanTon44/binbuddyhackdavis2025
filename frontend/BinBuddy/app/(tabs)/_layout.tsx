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
            // Use a transparent background on iOS to show the blur effect
            backgroundColor: '#d1cfcf',
            position: 'absolute',
          },
          default: {
          backgroundColor: '#d1cfcf',
          position: 'absolute',
          borderTopColor: 'transparent'
          },
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) =>       
          <Image source={require('../../assets/images/home.png')}
          style={{
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
              width: 30,
              height: 30,
              tintColor: focused ? 'black' : 'grey', 
            }}
          />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title:'Profile',
          tabBarIcon: ({ color, focused }) =>       
            <Image source={require('../../assets/images/account.png')}
            style={{
              width: 32,
              height: 32,
              tintColor: focused ? 'black' : 'grey', 
            }}
          />,
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
