
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import Home from '../App/src/screens/Home.js';
import Login from './src/screens/Login.js';
import RegisterUser from './src/screens/RegisterUser.js';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {/* <Stack.Screen name='Home' component={Home} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'white',
    flex: 1
  },
});
export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
