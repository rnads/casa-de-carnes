
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Login } from './src/components/auth/Login';
import { Products } from './src/components/app/products/products';
import { Product } from './src/components/app/products/Product';

export default function App() { 
    const Stack = createNativeStackNavigator();
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
       
     
   );
}

