import React from 'react';
import { StatusBar } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import First from './First';
import Second from './Second';
import Third from './Third';

const Stack = createNativeStackNavigator();

StatusBar.setBarStyle("dark-content");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}