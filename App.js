import React,{Component,useEffect,useState} from 'react';
import{View,Text,Platform,StatusBar} from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import HomeScrn from './src/components/HomeScrn';
import SplaScreen from './src/components/SplashScrn';
import CartScrn from './src/components/CartScrn'
import OrderScrn from './src/components/OrderPlace';

const Stack = createStackNavigator();

const App = () =>{
  useEffect(() => {
    StatusBar.setBarStyle('dark-content',true)
    StatusBar.setBackgroundColor("transparent")
    StatusBar.setTranslucent(true)
  },[])

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name = "Splash" component={SplaScreen}/>
        <Stack.Screen name="Home" component ={HomeScrn}/> 
        <Stack.Screen name="Cart" component ={CartScrn}/> 
        <Stack.Screen name="OrderScrn" component={OrderScrn}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;