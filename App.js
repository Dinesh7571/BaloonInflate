import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserFormScreen from './Screens/UserFormScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BalloonAnimation">
        <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="UserForm" component={UserFormScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
