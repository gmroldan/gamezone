import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './routes/drawer';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoader, setFontsLoaded] = useState(false);

  if (fontsLoader) {
    return (
      <NavigationContainer>
        <MyDrawer></MyDrawer>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading 
        startAsync={ getFonts }
        onFinish={ () => setFontsLoaded(true) }
      />
    );
  }  
}