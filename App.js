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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  const [formData, setFormData] = useState({
    lighting: '',
    lightingDetail: '',
    humidity: '',
    size: '',
    space: '',
    wateringNeeds: '',
    purpose: '',
    aesthetics: '',
  });
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
           <Stack.Screen name="Lighting">
            {(props) => <LightingScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen name="Humidity">
            {(props) => <HumidityScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen name="Size">
            {(props) => <SizeScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen name="Space">
            {(props) => <SpaceScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen name="WateringNeeds">
            {(props) => <WateringNeedsScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen name="Purpose">
            {(props) => <PurposeScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen name="Aesthetics">
            {(props) => <AestheticsScreen {...props} formData={formData} setFormData={setFormData} />}
          </Stack.Screen>
          <Stack.Screen name="Results" component={Result} /> 
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
