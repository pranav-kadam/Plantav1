import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './Pages/Home';
import Result from './Pages/Result';
import LightingScreen from './Pages/LightningScreen';
import HumidityScreen from './Pages/HumidityScreen';
import SizeScreen from './Pages/SizeScreen';
import SpaceScreen from './Pages/SpaceScreen';
import PurposeScreen from './Pages/PurposeScreen';
import WateringNeedsScreen from './Pages/WateringNeedsScreen';
import AestheticsScreen from './Pages/AestheticsScreen';
import FloweringScreen from './Pages/FloweringScreen'; 
import TemperatureScreen from './Pages/TemperatureScreen'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

const App = () => {
  const [formData, setFormData] = useState({
    lighting: '',
    humidity: '',
    size: '',
    space: '',
    wateringNeeds: '',
    purpose: '',
    aesthetics: '',
    flowering: '', 
    temperature: '',
  });

  const [fontsLoaded] = useFonts({
    'teko': require('./assets/fonts/Teko-Light.ttf'),
    'jak': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Or a loading screen
  }

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            animation: 'slide_from_right', // Use slide_from_right for right-to-left transitions
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{headerShown: false}}  
          />
          <Stack.Screen 
            name="Lighting" 
            options={{headerShown: false}}>
            {(props) => <LightingScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Flowering" 
            options={{headerShown: false}}>
            {(props) => <FloweringScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Temperature" 
            options={{headerShown: false}}>
            {(props) => <TemperatureScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Humidity" 
            options={{headerShown: false}}>
            {(props) => <HumidityScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Size" 
            options={{headerShown: false}}>
            {(props) => <SizeScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Space" 
            options={{headerShown: false}}>
            {(props) => <SpaceScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="WateringNeeds" 
            options={{headerShown: false}}>
            {(props) => <WateringNeedsScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Purpose" 
            options={{headerShown: false}}>
            {(props) => <PurposeScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Aesthetics" 
            options={{headerShown: false}}>
            {(props) => <AestheticsScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen 
            name="Results"  
            options={{headerShown: false}}>
            {(props) => <Result {...props} formData={formData} />}
          </Stack.Screen> 
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
