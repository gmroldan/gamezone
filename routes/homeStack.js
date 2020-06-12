import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#eee' } }}>
      <Stack.Screen name="Home" options={{ title: 'GameZone' }} component={Home} />
      <Stack.Screen name="ReviewDetails" options={{ title: 'Review Details' }} component={ReviewDetails} />
    </Stack.Navigator>
  );
}