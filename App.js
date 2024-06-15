import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './Pages/Home';
import Result from './Pages/Result';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Results" component={Result} /> 
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
