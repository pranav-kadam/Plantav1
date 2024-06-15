import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
      
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;