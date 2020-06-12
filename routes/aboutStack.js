import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator initialRouteName="About" screenOptions={{ headerStyle: { backgroundColor: '#eee' } }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}